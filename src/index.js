const express = require("express");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authRouter");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// app.use("/", (req, res, next) => {
//   res.send("hello word");
// });

app.use("/api/auth/user", authRouter);
app.use(express.json());

module.exports = app;
