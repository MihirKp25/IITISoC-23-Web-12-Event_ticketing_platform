const Event=require('../models/event.js');
const Ticket=require('../models/tickets.js');
const Purchase =require("../models/purchased.js");
const User =require("../models/user.js");
const CreatedEvent= require("../models/sold.js");
const nodemailer = require('nodemailer');
const qrcode = require('qrcode');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword'
    }
  });

// CREATE EVENT

module.exports.createEvent= async (req,res,next)=>{

   
    const newEvent= new Event(req.body);
    try{
        const savedEvent = await newEvent.save();
        
        console.log(savedEvent);
        res.status(200).json(savedEvent);
    }
    catch(err){
        next(err);
    }
};

// EDIT EVENT
module.exports.editEvent= async (req,res,next)=>{
    
    try{
            const updatedEvent=await Event.findByIdAndUpdate(
                req.params.id, 
                { $set: req.body },
                { new: true }
              );
              res.status(200).json(updatedEvent);       
    }
    catch(err){
        next(err);
    }
};
// DELETE EVENT
module.exports.deleteEvent= async (req,res,next)=>{

    try{
        await Event.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted.");
    }
    catch(err){
        next(err);
    }

};
// GET EVENT
module.exports.getEvent= async (req,res,next)=>{
    try {
        const event = await Event.findById(req.params.id).populate('tickettitle');
        res.status(200).json(event);
      } catch (err){
        next(err)
      }
};

module.exports.getEvents = async (req,res,next)=>{
    const {type,location,name}=req.query;  //To segregate min and max and others
   
       try{
        let query = {};
        if (location && type && name) {
          query.city = { $regex: new RegExp(`^${location}$`, 'i') };
          query.type ={ $regex: new RegExp(`^${type}$`, 'i') };
          query.name = { $regex: new RegExp(`^${name}$`, 'i') };
          const events = await Event.find(query).limit(req.query.limit);
          console.log(events)
          return   res.status(200).json(events); 
        }
        if (location && name) {
          query.city = { $regex: new RegExp(`^${location}$`, 'i') };
          query.name = { $regex: new RegExp(`^${name}$`, 'i') };
          const events = await Event.find(query).limit(req.query.limit);
          console.log(events)
          return   res.status(200).json(events); 
        }
        if (name && type) {
          query.name = { $regex: new RegExp(`^${name}$`, 'i') };
          query.type = { $regex: new RegExp(`^${type}$`, 'i') };
          const events = await Event.find(query).limit(req.query.limit);
          console.log(events)
          return   res.status(200).json(events); 
        }

        if (location && type) {
          query.city ={ $regex: new RegExp(`^${city}$`, 'i') };
          query.type ={ $regex: new RegExp(`^${type}$`, 'i') };
          const events = await Event.find(query).limit(req.query.limit);
          console.log(events)
          return   res.status(200).json(events); 
        }

        if (type) {
          query.type = { $regex: new RegExp(`^${type}$`, 'i') }
          const events = await Event.find(query).limit(req.query.limit);
          console.log(events)
            return res.status(200).json(events); 
        }
    
        if (location) {
          query.city = { $regex: new RegExp(`^${location}$`, 'i') };
          const events = await Event.find(query).limit(req.query.limit);
          console.log(events)
          return   res.status(200).json(events); 
        }

        if (name) {
          query.name = { $regex: new RegExp(`^${name}$`, 'i') };
          const events = await Event.find(query).limit(req.query.limit);
          console.log(events)
          return   res.status(200).json(events); 
        }
   
        const events=await Event.find().limit(req.query.limit);
        return   res.status(200).json(events); 
       
          
        
        
      
      
       }
       catch(err){
           next(err);
      }
}

module.exports.countByCountry= async (req,res,next)=>{
    
     try {
        const countries=req.query.country.split(",")
        const list =await Promise.all(countries.map(country=>{
             return Event.countDocuments({country:country});
        }));
        console.log(list);
        res.status(200).json(list);
     }
     catch(err){
        next(err);
     }
};

module.exports.LandingPageEvent= async (req,res,next)=>{
    
    try {
       const event= await Event.find(req.query)
       res.status(200).json(event);
    }
    catch(err){
       next(err);
    }
};

module.exports.BookTicket= async (req,res,next)=>{
    const event=await Event.findById(req.params.id)
    try {
        const ticketTitleId= event.tickettitle;
        
        const list= await Promise.all(ticketTitleId.map(element=>{
             return  Ticket.findById(element);
        }))
        console.log(ticketTitleId);
        console.log(list);
        // console.log(event);
        res.status(200).json(list);
       
    }
    catch(err){
       next(err);
    }
};

module.exports.ConfirmationMail = async (req, res) => {

  const { userId, purchaseId } = req.body;
  const user = await User.findById(userId);
  const purchase = await Purchase.findById(purchaseId);
  console.log(purchase)
  const event = await Event.findById(purchase.eventId);
  const ticket = await Ticket.findById(purchase.ticketId);
  console.log("EMAIL")
  console.log(user.email)

  // const event= await  Event.findById(eventId);
  // const eventUserId= event.userId;
  // const sender=await User.findById(eventUserId);
  // const senderMail= sender.email;
  const userEmail = user.email;
  // const userName =user.name;
  // const eventname =event.name;




  let config = {
    service: 'gmail',
    auth: {
      user: 'eventticketing.team@gmail.com',
      pass: 'whlviiqznhpebwxj'
    }
  }
  let transporter = nodemailer.createTransport(config);
          const qrCodeText = `
          PurchaseId: ${purchaseId}
          Name :${user.firstname} ${user.lastname}\n
          email : ${user.email}
          Ticket Type: ${ticket.type}\n
          Quantity: ${purchase.quantity}\n,`;
        const qrCodeOptions = {
          errorCorrectionLevel: 'H',
          type: 'png',
          quality: 0.9,
          margin: 1,
        };

        qrcode.toDataURL(qrCodeText, qrCodeOptions, (error, qrCodeDataUri) => {
                    if (error) {
                      console.error(error);
                      res.status(500).json({ message: 'Failed to generate QR code' });
                      return;
                    }


  let mailOptions = {
    from: 'eventticketing.team@gmail.com',
    to: userEmail,
    subject: 'Event Booking Confirmation',
    text: `Dear ${user.firstname},
    Thank you for booking your ticket for ${event.name}. We are pleased to inform you that your ticket has been successfully generated. Please find the details below:
    Event: ${event.name}
    Date: ${event.date.startDate} to ${event.date.endDate}
    Location: ${event.address},${event.city}
    Best Regards
  `,
    attachments: [
      {
        filename: 'qrcode.png',
        content: qrCodeDataUri.split(';base64,').pop(),
        encoding: 'base64',
      },
    ],
  };

  transporter.sendMail(mailOptions).then(() => { console.log("MAIL SEND SUCCESFULLY") })




})}