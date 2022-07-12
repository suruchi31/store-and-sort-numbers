// const express=require("express").Router();
const express = require("express");
const app=express();

const PORT=4000;
const file=require('./file');
const connectDB= require('./db');
connectDB();


app.use(express.json());

app.use('/api',require('./route'));
app.listen(PORT,()=>{
    console.log('SERVER RUNNING ON 4000');
})