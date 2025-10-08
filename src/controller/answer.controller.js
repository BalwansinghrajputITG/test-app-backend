//@desc

const Ans = require("../model/answerModel");
const UserModel = require("../model/authModel");
const Que = require("../model/questionModel");
// this function filter the answers and assign score to email
async function setcorrect_answer(s_ans) {
  const array_of_questions = await Que.find({}).lean();

  let answers = s_ans.SubmitAnswers.filter((first_arr) =>
    array_of_questions.some(
      (sen_arr) =>
        first_arr.QuestionID == sen_arr.QuestionID &&
        first_arr.AnswerID == sen_arr.CorrectAnswerID
    )
  );

  // score update system
  const currentScore = answers.length * 5;
  const saveScore = await UserModel.updateOne(
    { email: s_ans.Email },
    { $push: { scoreHistory: { score: currentScore } } }
  );
// send all user data 
  return { Email: s_ans.Email, SubmitAnswers: answers };
}

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
    next(error);
  }
};

module.exports = submitAnswers;
