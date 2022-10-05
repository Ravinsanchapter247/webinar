const { config } = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const dotenv=require('dotenv').config()

const app = express();

app.use(express.json())
app.use((req,res,next) => {
    console.log(req.method, req.path);
    next();
})

mongoose.connect(process.env.MONGODB_URI)
.then(() =>{

    app.listen(process.env.PORT,()=>{
        console.log('server is running on port 4000');
    })

})
.catch((error) =>{
    console.log(error);
})







