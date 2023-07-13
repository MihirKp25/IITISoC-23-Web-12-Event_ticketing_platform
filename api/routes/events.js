const express=require("express");
const {searchOrders,getOrders,getEvents, countByCountry,createEvent, deleteEvent, editEvent, getEvent, LandingPageEvent, BookTicket, CreatedEvent, ConfirmationMail , EventsbyType, EventsbyCountry} = require("../controllers/events");
const Event=require("../models/event.js")
const router=express.Router();
const {verifyToken, verifyUser}= require("../utils/verifyToken");

router.get("/find/:id",getEvent);

router.post("/",createEvent);

// router.put("/:id",verifyUser, editEvent);

router.delete("/:id", verifyUser,deleteEvent);

router.get("/countbycountries",countByCountry);

router.get('/genre/:type',EventsbyType);

router.get("/location/:country",EventsbyCountry);

router.get("/online",LandingPageEvent);

router.post("/sendconfirmation",ConfirmationMail);

router.get("/",getEvents);

router.get("/orders/search",searchOrders);

router.get("/orders/:id",getOrders);

router.get("/ticket/:id",BookTicket);



module.exports=router;
