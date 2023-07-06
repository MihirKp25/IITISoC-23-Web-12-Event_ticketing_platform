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
     
    <div className='maincontainer'>
      <Navbar />
       


    <div className="carrier">
      <div className="bookcontainer">

        <div className='labelkadiv'><label className='labelinput' style={{fontWeight:'700'}} >Search Event location</label><br/>
                    <input className="styleinput" type="text" placeholder={city} onChange={(evt)=>{setDestination(evt.target.value)}} />
                {/* </div>     */}
        </div> 

        <div className='labelkadiv' style={{marginLeft:'50px'}}><label className='labelinput' style={{fontWeight:'700'}} >  Event type</label><br/>
                    <input className="styleinput" type="text"  placeholder={type} onChange={(evt)=>{setType(evt.target.value)}}/>
        </div>

        <div className='labelkadiv'><label className='labelinput' style={{fontWeight:'700'}} >Price per ticket</label><br/>
                    <input className="styleinput" type="number"  />
        </div>

        <div className='labelkadiv' style={{marginLeft:'50px'}}><label className='labelinput' style={{fontWeight:'700'}}>   No. of Tickets   </label><br/>
                        <input className="styleinput" type="number"  /></div>
      </div>
    </div>

              
    <span style={{marginLeft:'450px', paddingLeft:'50px'}}><h1>Search results:</h1></span><br/><br/>
<div className="listresults">
  
  
 
  
  {data.map((item)=>(
    <div className="listresultitem">
        <Sitem item={item} key={item._id}/>
    </div>    
  ))}


</div> 

                    
                              




  
</div>
  )
}
