const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
    maxlength: 100,
  },
  create_at: {
    type: String,
    required: true,
  },
});

const Chat = new mongoose.model("Chat", chatSchema);

module.exports = Chat;
