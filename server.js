import express from 'express';
const app = express();
import mongoose from 'mongoose';
import configurations from './configs/index.js';


//database connection

mongoose.connect(configurations.CONNECTION)
.then(()=>{
    console.log('database connection established');
})
.catch((error)=>{
    console.log("database connection error",error.message)
})

//start server

app.listen(configurations.PORT,()=>{
    console.log(`server is starting on port ${configurations.PORT}`);
})



