const router=require("express").Router()

const {register,login}=require("../controllers/usersCtrl")



router.post("/register",register)
router.post("/login",login)




module.exports=router;

