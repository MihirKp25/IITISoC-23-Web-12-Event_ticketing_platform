const express = require("express");
const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
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
    required:true
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

  
}, { timestamps: true })

module.exports=mongoose.model("User", UserSchema);