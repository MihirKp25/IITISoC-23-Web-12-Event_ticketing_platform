const express = require("express");
const mongoose = require("mongoose");


const PurchaseSchema = new mongoose.Schema({  
   userId:{
    type:String
   },
   eventId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Event'
   },
   ticketId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Ticket'
   },
   purchaseDate:{
    type:Date
   },
   quantity:{
    type:Number
   }

}, { timestamps: true })

module.exports=mongoose.model("Purchase", PurchaseSchema);