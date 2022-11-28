const mongoose = require('mongoose')

const autoIncrement = require('mongoose-sequence')(mongoose);



//creating Schema for the posts

const articleSchema = new mongoose.Schema({
    _id: Number,
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

} , { _id: false })

articleSchema.plugin(autoIncrement);

module.exports= mongoose.model("Articles",articleSchema)