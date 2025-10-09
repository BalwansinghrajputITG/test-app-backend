const express = require("express");
const authRouter = express.Router();
const authController = require("../controller/authController");

authRouter.post("/register", authController.registerUser);
authRouter.post("/login", authController.loginUser);
authRouter.post("/logout", authController.logOutUsre);
authRouter.post("/dashboard", authController.dashboard);
authRouter.post("/Allusers", authController.UsersFetchingData);
<<<<<<< HEAD
authRouter.post("/addAdmin", authController.AddAdmin);
=======
authRouter.post('/updateuser' , authController.updateUser)
>>>>>>> b1e2f17beb1153f43d6832ddf14e14640cf7633e

module.exports = authRouter;
