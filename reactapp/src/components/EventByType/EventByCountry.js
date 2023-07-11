import "./EBT.css"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Sitem from "../searchitem/searchitem.js";
import useFetch from "../../hooks/useFetch";
import Navbar from "../navbar/Navbar";


const AllEventsCountryPage = () => {
  const [events, setEvents] = useState([]);
  const { country } = useParams();
 
  
  const {data, loading ,error}= useFetch(`http://localhost:3000/event/location/${country}`);
  console.log(data);


  return (
    <>
    <Navbar/>
    <div className="container">
      <h1 className="headingText">All Events - {country}</h1>
      <div className="listresults">
        {data.map((event) => (
          <div className="listresultitem">
            <Sitem item={event}/>
          </div>
        ))}
      </div>
    </div>

    </>
  );
};

export default AllEventsCountryPage;