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