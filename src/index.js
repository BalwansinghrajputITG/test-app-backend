<<<<<<< HEAD

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

    console.log("DB connected");

}).catch((e)=>{

    console.log(e,"db not connected");
})


=======
>>>>>>> 9fbab18a0b8edd98c259d9b509a0b57f016b24cb
const express = require("express");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/authRouter");
const questionRouter = require("./routes/questionRouter");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const app = express();
app.use(cors());
require("dotenv").config();
app.use(express.json());
app.use(cookieParser());
app.use(express.json());
 
app.use("/api/auth/user", authRouter);
app.use("/question" , questionRouter);
app.use(express.json());

module.exports = app;