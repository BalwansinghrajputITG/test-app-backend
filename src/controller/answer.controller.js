//@desc

const Ans = require("../model/answerModel");
const Que = require("../model/questionModel");

async function setcorrect_answer(s_ans) {
  const array_of_questions = await Que.find({}).lean();
  let answers = s_ans.SubmitAnswers.filter((first_arr) =>
    array_of_questions.some(
      (sen_arr) =>
        first_arr.QuestionID == sen_arr.QuestionID &&
        first_arr.AnswerID == sen_arr.CorrectAnswerID
    )
  );
  console.log(answers);
  return { SubmitAnswers: answers };
}
// setcorrect_answer();
const submitAnswers = async (req, res, next) => {
  try {
    const answerData = await setcorrect_answer(req.body);
    const ans_ = new Ans(answerData);
    const s_ans = await ans_.save();
    res.status(200).json({
      message: "your answer submited successfully",
      answers: req.body,
    });
  } catch (error) {
    next(error)
  }
};

module.exports = submitAnswers;
