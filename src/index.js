const express = require("express");

const { default: mongoose } = require("mongoose");

const DashboardRouter = require("./routes/dashboardRoutes");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authRouter");
const questionRouter = require("./routes/questionRouter");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "URL is missing something" });
});

app.use("/dashboard", DashboardRouter);

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("DB connected");
  })
  .catch((e) => {
    console.log(e, "db not connected");
  });

app.use(cors());
app.use(cookieParser());

app.use("/api/auth/user", authRouter);
app.use("/question", questionRouter);

module.exports = app;
