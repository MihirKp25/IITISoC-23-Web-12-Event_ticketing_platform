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


          <div className="listcontainer">
            <div className="listwrapper">
              <div className="listsearch">

                <h1 className="lsitem">Search</h1>
                <div className="lsitem">
                  <div className="lsoptionitem">
                    <label >Event loacation</label>
                    <input type="text" placeholder={city} onChange={(evt)=>{setDestination(evt.target.value)}} />
                  </div>
                  <div className="lsoptionitem">
                    <label >Event type</label>
                    <input type="text"  placeholder={type} onChange={(evt)=>{setType(evt.target.value)}}/>
                  </div>

                  <div className="lsoptionitem">
                    <span className="lsoptiontext">Price <small>per ticket</small></span>
                    <input type="number" className='lsoptiontext1' />

                    </div>
                      <div className="lsoptionitem">
                        <span className="lsoptiontext">No. of Tickets </span>
                        < input type="number" className='lsoptiontext1' />
                      </div>
                    
                    
                    <button type="button" onClick={handleClick} class="btn btn-dark">Search</button>
                  </div>


                </div>

              </div>

              <div className="listresults">
                {data.map((item)=>(
                      <Sitem item={item} key={item._id}/>
                ))}
              

            </div>

            </div>
           
          </div>
      </>
    </div>
  )
}
