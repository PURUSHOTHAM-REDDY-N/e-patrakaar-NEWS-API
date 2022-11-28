const Articles = require("../models/articleModel")


// error handling

const handleErrors=(err)=>{

    let errors = { title: "", description: "",url:"",content:"" };

    
    if(err.message.includes("title")){
        errors.title="title already exists"
        return errors
    }
    if(err.message.includes("description")){
        errors.description="description already exists"
        return errors
    }
    if(err.message.includes("url")){
        errors.url="url already exists"
        return errors
    }
    if(err.message.includes("content")){
        errors.content="content already exists"
        return errors
    }
    
}




//setting the posts in the database
module.exports.postArticle=async (req,res,next)=>{

    try {
    console.log(req.body);

    const {author,title,description,url,urlToImage,publishedAt,content}=req.body

    const article=await Articles.create({
        author,
        title,
        description,
        url,
        urlToImage,
        publishedAt,
        content
    })

    res.status(201).json({article:article._id,created:true})
} catch (err){
    const errors = handleErrors(err)
    res.json({errors,created:false})
}
}


// getting the posts from database
module.exports.getArticle=async (req,res,next)=>{
    console.log(req.query)
    if(req.query.title!=""){

        var data = await Articles.find({"title":{"$regex":`${req.query.title}`,"$options": "i" }})
        res.send(data)
    }

}

