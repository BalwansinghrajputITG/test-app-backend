const { default: mongoose } = require("mongoose");

const answersschems = mongoose.Schema({
  Email : {
    type : String,
    required : true,
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
},);

const Ans = mongoose.model("answer", answersschems);

module.exports = Ans;
