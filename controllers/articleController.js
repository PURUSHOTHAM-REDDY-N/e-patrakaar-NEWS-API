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

    const {author,title,description,content}=req.body

    const article= new Articles({
        author:author,
        title:title,
        description:description,
        content:content
    })

    if(req.files){
        let path = ""
        req.files.forEach(function(files,index,arr){
            path = path+files.path+","
        });
        path = path.substring(0,path.lastIndexOf(","))
        article.images=path
    }
    article.save()

    
    res.status(201).json({created:true})
} catch (err){
    const errors = handleErrors(err)
    console.log(err)
    res.json({err,created:false})
}
}


// getting the posts from database
module.exports.getArticle=async (req,res,next)=>{
    console.log(req.query)

        var data = await Articles.find({author:{$regex:new RegExp('^'+req.query.author,'i')}}).exec();
        res.send(data)
   

}

