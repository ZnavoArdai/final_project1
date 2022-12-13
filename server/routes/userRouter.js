const router=require("express").Router()

const {register,login,getAllUsers}=require("../controllers/usersCtrl")



router.post("/register",register)
router.post("/login",login)
router.get("/",getAllUsers)





module.exports=router;

