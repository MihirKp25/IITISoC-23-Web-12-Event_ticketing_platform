const express=require("express");
const {getEvents, countByCountry,createEvent, deleteEvent, editEvent, getEvent, LandingPageEvent, BookTicket, CreatedEvent, ConfirmationMail } = require("../controllers/events");
const Event=require("../models/event.js")
const router=express.Router();
const {verifyToken, verifyUser}= require("../utils/verifyToken");

router.get("/find/:id",getEvent);

router.post("/",createEvent);

// router.put("/:id",verifyUser, editEvent);

router.delete("/:id", verifyUser,deleteEvent);

router.get("/countbycountries",countByCountry);

router.get("/online",LandingPageEvent);

router.post("/send-confirmation",ConfirmationMail);

router.get("/",getEvents);


router.get("/ticket/:id",BookTicket);



module.exports=router;
