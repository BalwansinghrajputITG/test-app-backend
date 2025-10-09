const type = require("cla/lib/type");
const { default: mongoose } = require("mongoose");

const answersschems = mongoose.Schema({
  Email: {
    type: String,
    required: true,
  },
  SubmitAnswers: [
    {
      QuestionID: {
        type: String,
        required: true,
      },
      AnswerID: {
        type: String,
        required: true,
      },
    },
  ],
  CorrectAnswers: [
    {
      QuestionID: {
        type: String,
        required: true,
      },
      AnswerID: {
        type: String,
        required: true,
      },
    },
  ],
  Score: {
    type: Number,
  },
});

const Ans = mongoose.model("answer", answersschems);

module.exports = Ans;
