import React from 'react'
import Navbar from '../navbar/Navbar.js';
import './allEvents.css'
import SingleEvent from "./singleEvent.jsx";
// import Datepick from "./datepicker.js";
import Model from './Model.jsx'
import { DateRange } from 'react-date-range';
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState, useContext } from 'react';
import { SearchContext } from '../../hooks/context/SearchContext.jsx';
import useFetch from '../../hooks/useFetch.jsx';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../hooks/context/AuthContext.jsx';
export default function Book() {
 
  const {user}=useContext(AuthContext);
 

  console.log(user)

 

  const { data, loading, error , reFetch} = useFetch(`/user/events/booked/${user._id}`);
  console.log(data);

const handleClick=()=>{
  reFetch();
};
  
  


  return (
     
    <div>
      <Navbar />
     <>

     <h2 style={{paddingTop:'100px', color:'white', backgroundColor:'rgb(31,31,31)', marginBottom:'0px', textAlign:'center'}}>BOOKED EVENTS:</h2>
      

              

<div className="listresults">

  
  {data.map((item)=>(
        <SingleEvent details={item}  />
  ))}



</div> 


                    
                              




</>
</div>
  )
}
