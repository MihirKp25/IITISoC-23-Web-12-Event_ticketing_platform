const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const eventRoute=require("./routes/events");
const userRoute=require("./routes/user")
const AuthRoute=require("./routes/auth");
const ticketRoute= require("./routes/tickets");
const cookieParser=require("cookie-parser");


dotenv.config();
const app = express();
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Database connected!")
    } catch (error) {
        throw error
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected")
})

//MIDDLEWARES
app.use(express.json());
app.use(cookieParser());

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

 //MIDDLEWARE FOR ROUTES CONNECTION
 app.use('/event',eventRoute); 
 app.use('/user',userRoute); 
 app.use('/auth', AuthRoute);
 app.use('/ticket', ticketRoute);


app.get("/",(req,res)=>{
    res.send("Hello there")
})

app.listen(3000, () => {
    connect();
    console.log("Server is runnig on port 3000!")
})