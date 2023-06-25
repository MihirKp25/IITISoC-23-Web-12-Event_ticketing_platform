const express = require("express");
const mongoose = require("mongoose");


const EventSchema = new mongoose.Schema({
    name: {
        type: String,
       
    },
    type: {
        type: String,
     
    },
    address: {
        type: String,
       
    },
    city: {
        type: String,

    },
    country: {
        type: String,
       
    },
    photos: {
        type: [String],
    },
    desc: {
        type: String,
       
    },
    featured: {
        type: Boolean,
       
    },

    date:[{
        type:Date,
       
    }],
    time:[{
        type:String,
    }],
    Free0rPaid:{
        type:Boolean,
       
    },
    tickettitle:{
        type:String
    },

})

module.exports=mongoose.model("Event", EventSchema);