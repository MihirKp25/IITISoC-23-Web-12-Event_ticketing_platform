const express=require("express");
const { createUser, deleteUser, editUser, getUser, getUsers } = require("../controllers/user");
const User=require("../models/user.js")
const router=express.Router();
const {verifyToken, verifyAdmin, verifyUser}= require("../utils/verifyToken");

router.get("/:id",verifyUser, getUser);

router.get("/",verifyAdmin , getUsers);


router.put("/:id",verifyUser, editUser);

router.delete("/:id",verifyUser, deleteUser);



module.exports=router;
