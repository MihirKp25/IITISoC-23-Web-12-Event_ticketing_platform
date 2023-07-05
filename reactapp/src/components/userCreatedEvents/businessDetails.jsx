import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import axios from "axios";
import TicketInfo from "./ticketdetails";

export default function Business(){

  const location=useLocation();
  const detailsId=location.pathname.split('/')[3];
  console.log(detailsId);
  // const [data,setData]=useState({})

  const { data, loading, error , reFetch} = useFetch(`/user/events/details/booked/${detailsId}`);
  console.log(data);
  // console.log(data.eventId);

  console.log(data.tickettitle)

  return(<>
  
   INFO
   <p>{data.name}</p>  
   {/* <p>{data.tickettitle.totalTickets}</p> */}
  
   <p>{data.address} , {data.city},{data.country}</p>

   <p> {data.time}</p>
   <p>{data.type}</p>
   <p>{data.desc}</p>
   <p>{data.date}</p>

   {data.tickettitle?.map((ticketInfo)=>(
     <TicketInfo ticket={ticketInfo}/>
    ))}
   
  
  
  
  
  
  
  
  </>)

}