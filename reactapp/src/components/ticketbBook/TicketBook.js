import { useState } from "react";
import useFetch from "../../hooks/useFetch"
import axios from "axios";
// import TicketBooked from "../functions/TicketBooked";

export default function TicketBook({eventId}){

const {data,error,loading}=useFetch(`http://localhost:3000/event/ticket/${eventId}`)
console.log(data);
const [ticket,setTickets]=useState(0);

const handleClick=async ()=>{

   try {
         const purchase= await axios.post(`http://localhost:3000/ticket/purchase/${eventId}/${data._id}`,{eventId:eventId,ticketId:data._id,ticket});   //NOTE TO INCLUDE USER DATEILS HERE AFTER COMPLETION
   }
  catch(err){
     console.log(err);
  }
}

return (
<>
  <div>
     <h1>Ticket Name : {data.name}</h1>
     <h1>Ticket Price per ticket:{data.price}</h1>
     <h1>Note-consent for ticket purchase: {data.desc}</h1>
     
     <h1>Tickets Remaining: {data.totalTickets-ticket} </h1>
     <input type="Number" onChange={(e)=>{setTickets(e.target.value)}}></input>
     <h1>Total Price: {data.price*ticket}</h1>
     <button onClick={handleClick}>Book </button>
     </div>
</>





)









}