const express = require("express");
const mongoose = require("mongoose");


const PurchaseSchema = new mongoose.Schema({  
   userId:{
    type:String
   },
   eventId:{
    type:String
   },
   ticketId:{
    type:String
   },
   purchaseDate:{
    type:Date
   },
   quantity:{
    type:Number
   }

}, { timestamps: true })

module.exports=mongoose.model("Purchase", PurchaseSchema);