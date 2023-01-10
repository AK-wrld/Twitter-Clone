const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
    name:{
        type:String
    },
    username:{
        type: String,
        
    },
   
    password:{
        type:String,
        
    },
    
    date: {
        type: Date,
        default : Date.now
    },
  });
  module.exports = mongoose.model('user',UserSchema)