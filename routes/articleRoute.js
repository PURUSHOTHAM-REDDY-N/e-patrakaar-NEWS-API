const express =  require('express');
const router = express.Router();

const {postArticle,getArticle} = require('../controllers/articleController')

const upload = require("../middleware/upload")

router.post("/postarticle",upload, postArticle)

// router.post("/getarticle",postArticle)

router.get("/getarticle",getArticle)

module.exports=router;