const mongoose = require('mongoose');
const { Schema } = mongoose;
const TweetSchema = new Schema({
    name: {
        type:String
    },
    username:{
        type: String,
        
    },
   
    description: {
        type: String,
        required: true,
      
    },
    
    date: {
        type: Date,
        default : Date.now
    },

  });
  module.exports = mongoose.model('tweets',TweetSchema)