const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

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

let allchat = [
  {
    from: "daniyal",
    to: "arav",
    msg: "ha bhai chalna hai kiya kal",
    create_at: new Date(),
  },
  {
    from: "daniyal",
    to: "arav",
    msg: "ha bhai chalna hai kiya kal",
    create_at: new Date(),
  },
  {
    from: "Arav",
    to: "raj",
    msg: "What happed can we go for coollege",
    create_at: new Date(),
  },
  {
    from: "daniyal",
    to: "raj",
    msg: "ha bhai chalna hai kiya kal aur tu bhi aa",
    create_at: new Date(),
  },
  {
    from: "raj",
    to: "prince",
    msg: "mai nhi ja paunga kiyo ki main bemmar hu",
    create_at: new Date(),
  },
];

Chat.insertMany(allchat);
