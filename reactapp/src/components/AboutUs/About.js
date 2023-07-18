
import "./About.css";
import Navbar from "../navbar/Navbar";
import img from "./ticket.png";
import sort from './sort1.png';
import ic1 from './ic1.avif';
import qr from './qr.png';

const AboutUs = () => {
    return (
        <>
        <div className="title">
        <Navbar/>
</div>
     
     <div className="cont">
<h1>Event Creating and Booking made Easier !!!</h1> </div>
<div className="title2">
<h5>Easiest way to book and create events in simple steps.</h5>  </div>
<div className="pre-container">
    
 <div className="container">
<div className="img">
 <img src={img}  height="600px" width="300px"alt="" />
 </div>

<div className="text">
    <div className="t">
<img src={ic1} height="100 px" width="100 px"alt="" />
<h4>Easy Payments</h4>
<p>No hectic issues while payments.Just a few steps and confirm your ticket</p>
   
    </div>
    <div className="t">
<img src={sort} height="100 px" width="100 px"alt="" />
<h4>Quick Sorting </h4>
<p>Easily sort events you want and confirm your ticket in just few steps </p>
    
    </div>
    <div className="t">
<img src={qr} height="100 px" width="100 px"alt="" />
<h4>QR Scanner </h4>
<p>QR Code provided for easy authentication and enter the event  </p>
    
    </div>
     </div>
     </div>
     </div>
     

        
        
        </>
            
)
    };
export default AboutUs;
