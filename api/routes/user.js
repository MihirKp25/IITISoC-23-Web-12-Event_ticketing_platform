const express=require("express");
const {viewDetailsOfCreatedEvent,viewUserCreatedEvents, viewUserBookedEvents, userCreatedEvent,createUser, deleteUser, editUser, getUser, getUsers ,getUserCount} = require("../controllers/user");
const User=require("../models/user.js")
const router=express.Router();
const {verifyToken, verifyAdmin, verifyUser}= require("../utils/verifyToken");

router.get("/:id", getUser);

router.get("/", getUsers);

router.get("/count" , getUserCount);

router.get("/events/created/:id", viewUserCreatedEvents);

router.get("/events/booked/:id", viewUserBookedEvents);

router.put("/:id",verifyUser, editUser);

router.delete("/:id",verifyUser, deleteUser);

router.post("/event", userCreatedEvent);

router.get("/events/details/booked/:id", viewDetailsOfCreatedEvent);



module.exports=router;
