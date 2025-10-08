const express = require("express");
const authRouter = express.Router();
const authController = require("../controller/auth.Controller");

authRouter.post("/register", authController.registerUser);
authRouter.post("/login", authController.loginUser);
authRouter.post("/logout", authController.logOutUsre);

module.exports = authRouter;
