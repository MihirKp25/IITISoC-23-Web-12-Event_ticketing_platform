import React from 'react'
import Navbar from '../navbar/Navbar.js';
import './Book.css'
import Sitem from "../searchitem/searchitem.js";
// import Datepick from "./datepicker.js";

import { DateRange } from 'react-date-range';
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState, useContext } from 'react';
import { SearchContext } from '../../hooks/context/SearchContext.jsx';
import useFetch from '../../hooks/useFetch.jsx';
import { useLocation } from 'react-router-dom';

export default function Book() {
  const location = useLocation();
  
 
  const city=location.state.state.city;
  console.log(city);
  const [destination, setDestination] = useState(location.state.city);
  const [type, setType] = useState("asd");
  const [price, setPrice] = useState("");
 

  const { data, loading, error , reFetch} = useFetch(`/event?type=${type}&location=${destination}`);
  console.log(data);

const handleClick=()=>{
  reFetch();
};
  


  return (
     
    <div>
      <Navbar />
     <>


        <div className="carrier">
       <div className="searchbar">

        <label ><h5> Search Event location</h5></label>
                    <input type="text" placeholder={city} onChange={(evt)=>{setDestination(evt.target.value)}} />
                    
                    <label ><h5>Event type</h5></label>
                    <input type="text"  placeholder={type} onChange={(evt)=>{setType(evt.target.value)}}/>
                    <label ><h5>Price <small>per ticket</small></h5> </label>
                    <input type="number"  />
                    <label><h5>No. of Tickets</h5> </label>
                        < input type="number"  />
                    </div>
                    </div>

              

<div className="listresults">
  
  {data.map((item)=>(
        <Sitem item={item} key={item._id}/>
  ))}


</div> 

                    
                              




</>
</div>
  )
}
