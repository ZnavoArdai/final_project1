const router=require("express").Router()

const {register,login,getAllUsers,getUserById}=require("../controllers/usersCtrl")



router.post("/register",register)
router.post("/login",login)
router.get("/",getAllUsers)
router.get("/:id",getUserById)






module.exports=router;

