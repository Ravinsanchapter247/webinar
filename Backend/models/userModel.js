const mongoose =require('mongoose');


//create user schema
const userSchema =mongoose.Schema({

    
    firstName:{
        type:String,
        required:[true,"Please add a name"],

    },
     
    lastName:{
        type:String,
        required:[true,"Please add a name"],

    },
    email:{
        type:String,
        required:[true,"Please add a email"],
        unique:true
    },

    mobileNumber:{
        type:String,
        required:[true,"Please enter a mobile number"],
        
    },

    password:{
        type:String,
        required:[true,"Please add a password"]
    },

    passwordConfirmation:{
        type:String,
        required:[true,"Please add a confirmation password"]
    }
    

},{timestamps:true})






module.exports=mongoose.model('User',userSchema)