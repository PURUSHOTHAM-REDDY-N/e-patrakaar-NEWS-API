const mongoose = require('mongoose')


//creating Schema for the posts

const articleSchema = new mongoose.Schema({
    author:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
    url:{
        type:String,
        required:true,
        unique:true
    },
    urlToImage:{
        type:String,
        required:true,
        
    },
    publishedAt:{
        type:Date,
        default:Date.now
    },
    content:{
        type:String,
        required:true,
        unique:true
    }

})

module.exports= mongoose.model("Articles",articleSchema)