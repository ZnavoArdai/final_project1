const router=require("express").Router()

const {getAllPosts,createPost}=require("../controllers/postsCtrl")



router.get("/",getAllPosts)
router.post("/create",createPost)





module.exports=router;

