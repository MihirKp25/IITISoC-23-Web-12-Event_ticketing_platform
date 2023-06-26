const express = require("express");
const mongoose = require("mongoose");



const TicketSchema =new mongoose.Schema({
    name:{
        type:String,
   
    },
    type: {
        type: String,
   
    },
    price:{
        type:Number,
     
        min:0,
    },
    date:[{
        type:String,
    }],
    desc: {
        type: String,
      
    },
    // totalTickets:{
    //     type:Number
    // },
    // remainingTickets:{
    //     type:Number
    // },
    // ticketNumber:[]



});

module.exports=mongoose.model("Ticket", TicketSchema)