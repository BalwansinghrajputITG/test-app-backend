const { default: mongoose } = require("mongoose");

const answersschems = mongoose.Schema({
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
},);

const Ans = mongoose.model("answer", answersschems);

module.exports = Ans;
