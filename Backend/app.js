
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes')
const bodyParser = require('body-parser')

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req,res,next) => {
    console.log(req.method, req.path);
    next();
})


// user routes
app.use('/api/users',userRoutes)

//connect mongodb
mongoose.connect(process.env.MONGODB_URI)
.then(() =>{

    app.listen(process.env.PORT,()=>{
        console.log('server is running on port 4000');
    })

})
.catch((error) =>{
    console.log(error);
})







