const express = require('express');

const {getAllQuestions} = require('../controller/dashBoardController');

const dashboardRouter = express.Router();

dashboardRouter.get('/',getAllQuestions);

module.exports = dashboardRouter;