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
  let city="";
  console.log(location)
 if(location.state){
   city=location.state.state.city;
  console.log(city);
 }
 
  const [destination, setDestination] = useState(city);
  const [type, setType] = useState("");
  
 

  const { data, loading, error , reFetch} = useFetch(`/event?type=${type }&location=${destination }`);
  console.log(data);
  const handleChange1=(e)=>{
    e.preventDefault();
    setDestination(e.target.value);
   
    // reFetch();
  }
  const handleChange2=(e)=>{
    e.preventDefault();
    setType(e.target.value);
    // reFetch();
  }

const handleClick=()=>{
  reFetch();
};
  


  return (
     
    <div className='maincontainer'>
      <Navbar />
       


    <div className="carrier">
      <div className="bookcontainer">

        <div className='labelkadiv'><label className='labelinput' style={{fontWeight:'700'}} >Search Event location</label><br/>
                    <input className="styleinput" type="text" placeholder={city} onChange={handleChange1} />
                {/* </div>     */}
        </div> 

        <div className='labelkadiv' style={{marginLeft:'50px'}}><label className='labelinput' style={{fontWeight:'700'}} >  Event type</label><br/>
                    <input className="styleinput" type="text"  placeholder={type} onChange={handleChange2}/>
        </div>

    
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
