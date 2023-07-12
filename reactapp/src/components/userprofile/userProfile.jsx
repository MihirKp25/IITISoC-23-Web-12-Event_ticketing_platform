import React from 'react'

import Navbar from '../navbar/Navbar';
import a from '../userprofile/profilepic.jpg'
import './userProfile.css';
import Edit from './userprofcomp/Edit.jsx'
export default function userProfile() {
  return (
    <div style={{backgroundColor:'rgb(31,31,31)'}}>
      <Navbar/>
      <div className="main-container">
        <div className="lefts">
            <img src = {a} className='a1a'></img>
            <div className='a2a'><b>ADITYA MASTUD</b></div><br/>
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
