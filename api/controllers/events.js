const Event=require('../models/event.js');
const Ticket=require('../models/tickets.js')


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
        const event = await Event.findById(req.params.id);
        res.status(200).json(event);
      } catch (err){
        next(err)
      }
};

module.exports.getEvents = async (req,res,next)=>{
    const {type,location}=req.query;  //To segregate min and max and others
    console.log(type);
       try{
          
           const events= await Event.find({type:type,
               city:location 
            } ).limit(req.query.limit); //NEW TRUE GIVES US UPDATED VALUE
           res.status(200).json(events); 
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
        const list=await Ticket.findById(ticketTitleId);
        console.log(ticketTitleId);
        console.log(list);
        console.log(event);
        res.status(200).json(list);
       
    }
    catch(err){
       next(err);
    }
};