const express = require("express");
const authRouter = express.Router();
const authController = require("../controller/authController");

authRouter.post("/register", authController.registerUser);
authRouter.post("/login", authController.loginUser);
authRouter.post("/logout", authController.logOutUsre);
authRouter.post("/dashboard", authController.dashboard);
authRouter.post("/Allusers", authController.UsersFetchingData);
authRouter.post('/updateuser' , authController.updateUser)

module.exports = authRouter;
