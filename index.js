const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const Chat = require("./models/chat.js");
app.use(express.urlencoded({ extended: true }));
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
//------------------------------------------------------------------------------//

let port = 8080;
app.listen(port, () => {
  console.log("Hi there !");
});

//------------------------------------------------------------------------------//

main()
  .then((res) => {
    console.log("Success! Connection to mongooDB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

//------------------------------------------------------------------------------//
// all chats
app.get("/chat", async (req, res) => {
  let chats = await Chat.find();
  // console.log(chats);
  res.render("home.ejs", { chats });
});

// new chat form
app.get("/chat/newchat", (req, res) => {
  res.render("newchat.ejs");
});

// for saving the chat in DB
app.post("/newchat", (req, res) => {
  let { from, to, msg } = req.body;
  console.log(req.body);
  const chat1 = new Chat({
    from: from,
    to: to,
    msg: msg,
    create_at: new Date(),
  });
  chat1
    .save()
    .then((res) => {
      // console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  res.redirect("/chat");
});

app.delete("/chat/:_id", (req, res) => {
  let { _id } = req.params;
  Chat.deleteOne({ _id: _id })
    .then((res) => {
      // console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chat");
});

//------------------------------------------------------------------------------//
