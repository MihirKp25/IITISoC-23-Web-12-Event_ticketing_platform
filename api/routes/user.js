const express=require("express");
const {viewDetailsOfCreatedEvent,viewUserCreatedEvents, viewUserBookedEvents, userCreatedEvent,createUser, deleteUser, editUser, getUser, getUsers ,getUserCount} = require("../controllers/user");
const User=require("../models/user.js")
const router=express.Router();
const {verifyToken, verifyAdmin, verifyUser}= require("../utils/verifyToken");

router.get("/:id",verifyUser, getUser);

router.get("/",verifyAdmin, getUsers);

//router.get("/count" , getUserCount);

router.get("/events/created/:id",verifyUser, viewUserCreatedEvents);

router.get("/events/booked/:id",verifyUser, viewUserBookedEvents);

router.put("/:id",verifyUser, editUser);

router.delete("/:id",verifyUser, deleteUser);

router.post("/event",verifyUser, userCreatedEvent);

router.get("/events/details/booked/:id",verifyUser, viewDetailsOfCreatedEvent);



module.exports=router;
