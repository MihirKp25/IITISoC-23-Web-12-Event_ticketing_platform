import React, { useContext, useEffect } from 'react'

import Navbar from '../navbar/Navbar';
import a from "./profilepic.jpg"
import './userProfile.css';
import Edit from './userprofcomp/Edit.jsx'

import { AuthContext } from '../../hooks/context/AuthContext';


export default function UserProfile() {


  const {user } =useContext(AuthContext);

  
  return (
    <div style={{backgroundColor:'rgb(31,31,31)'}}>
      <Navbar/>
      <div className="main-container">
        <div className="lefts">
           <img src ={user.image || a} style={{width:"90px", height:"130px"}}  className='a1a'></img>
            <div className='a2a'><b>{user.username}</b></div><br/>
            <span className="asd"><a className="asd"style = {{textDecoration:'none'}}href = "/created/event">YOUR CREATED EVENTS</a></span><br/>
            <span className="asd"><a className="asd"style = {{textDecoration:'none'}}href = "/booked/event">YOUR BOOKED EVENTS</a></span><br/>
            </div>
        <div className="rights">
            <Edit/>
            
        </div>
      </div>
    </div>
  )
}
