
const express = require('express');

const {default:mongoose} = require('mongoose');

const DashboardRouter = require('./routes/dashboardRoutes');

require('dotenv').config();

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.json({msg:"question get successfully"})
})    

app.use('/dashboard',DashboardRouter);

mongoose.connect(process.env.DATABASE_URL).then(()=>{



}).catch((e)=>{
  next(e)
})


const express = require("express");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authRouter");
app.use(cookieParser());
app.use(express.json());

// app.use("/", (req, res, next) => {
//   res.send("hello word");
// });

app.use("/api/auth/user", authRouter);
app.use(express.json())



module.exports = app;

