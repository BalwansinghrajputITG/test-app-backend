const express = require("express");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authRouter");
const app = express();
app.use(cookieParser());
app.use(express.json());

// app.use("/", (req, res, next) => {
//   res.send("hello word");
// });

app.use("/api/auth/user", authRouter);

module.exports = app;
