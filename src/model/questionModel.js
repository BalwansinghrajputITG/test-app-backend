const type = require("cla/lib/type");
const { default: mongoose } = require("mongoose");

const Question = mongoose.Schema({
  QuestionID: {
    type: String,
    required: true,
    unique: true,
  },
  Question: {
    type: String,
    required: true,
  },
  Answers: [
    {
      AnswerID: { type: String, require: true, unique: true },
      Answer: {
        type: String,
        require: true,
      },
    },
  ],
  CorrectAnswerID: {
    type: String,
    required: true,
  },
});

const Que = mongoose.model("questions", Question);

module.exports = Que;
