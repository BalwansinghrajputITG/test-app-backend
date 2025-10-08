const express = require("express");
const {
  getAllQuestions,
  getQuestionByID,
} = require("../controller/question.Controller");
const routes = express.Router();

routes.route("/all").get(getAllQuestions);
routes.route("/id/:id").get(getQuestionByID);
routes.route("/").get((req, res, next) => {
  res.status(200).json({ message: "please enter correct url" });
});
module.exports = routes;
