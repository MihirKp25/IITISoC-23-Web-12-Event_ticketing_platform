const express = require("express");
const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    
  },
  lastname: {
    type: String,
    required: true,
    
  },
  username: {
    type: String,
    required: true,
    
  },
  email: {
    type: String,
    required: true,
    
  },
  password: {
    type: String,
    required: true,
  },
 
  age: {
    type: Number,
    required: true,
  },
  bio: {
    type: String,

  },
  contactNo:{
    type:Number,
    // required:true
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  tickets:{
    type:[String],
  },
  events:{
    type:[String],
  },
  image:{type:String}

  
}, { timestamps: true })

module.exports=mongoose.model("User", UserSchema);