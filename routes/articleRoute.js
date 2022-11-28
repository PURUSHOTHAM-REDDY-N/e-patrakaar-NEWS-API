const express =  require('express');
const router = express.Router();

const {postArticle,getArticle} = require('../controllers/articleController')

router.post("/postarticle",postArticle)

// router.post("/getarticle",postArticle)

router.get("/getarticle",getArticle)

module.exports=router;