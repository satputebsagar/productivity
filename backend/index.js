const express =require('express');
const cors=require('cors');
const mongoose =require('mongoose');
const path=require('path');

require('dotenv').config();

const app=express();
const port=process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const url=process.env.MONGODB_URI;

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

const connection=mongoose.connection;
connection.once("open",()=>{
    console.log("database connected")
});


// routes
const tasksRouter=require('./routes/tasks');
const projectsRouter=require('./routes/projects');

app.use("/tasks",tasksRouter);
app.use("/projects",projectsRouter);



app.listen(port,()=>{
    console.log(`server is running on port: ${port}`)
});