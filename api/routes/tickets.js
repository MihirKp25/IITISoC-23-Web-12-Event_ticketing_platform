const express=require("express");
const {purchaseTicket,createTicket, updateTicket, deleteTicket, getTicket, getTickets}=require("../controllers/ticket");
const {verifyToken, verifyUser}= require("../utils/verifyToken");



const router = express.Router();
//CREATE
router.post("/:eventid", createTicket);

//UPDATE
router.put("/:id",verifyUser, updateTicket);
//DELETE
router.delete("/:id/:eventid",verifyUser, deleteTicket);
//GET

router.get("/:id", getTicket);
//GET ALL

router.get("/", getTickets);

router.post("/purchase/:eventId/:ticketId",purchaseTicket);



module.exports=router;
