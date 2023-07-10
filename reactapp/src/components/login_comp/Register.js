import './Login.css';
import logo from '../images/loglogo.png'
import { useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import axios from "axios"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../navbar/Navbar';


const Create = () => {
  const [info, setInfo] = useState({});
  const [responseValue, setResponseValue] = useState(null);

  const navigate=useHistory(); 
  const { data, loading, error } = useFetch("/auth/register");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      toast.success('Registered Succesfully ', {
        position: toast.POSITION.TOP_CENTER
    });
     const newuser={...info};
      console.log(info);
      const response=await axios.post("/auth/register", newuser);
      setResponseValue(response.data);
      console.log(response.data);
      setTimeout(() => {
        navigate.push("/login");
      }, 2000); // Delay the navigation by 2000 milliseconds (2 seconds)
      
      }
       catch (err) { 
        toast.error('Try different Username or Password', {
          position: toast.POSITION.TOP_CENTER
      });
        console.log(err) }
  };

  return (
    <>
    <Navbar/>
    <ToastContainer/>
    <div className="flex">
      <div className="left"></div>
      <div className="create">
        <img src={logo} alt="" style={{ width: '200px' }} className="loglogo" />
        <h2 style={{ fontSize: '48px', fontWeight: '1000' }}><b>Register</b></h2>
        
        <input
          className='entry'
          type="string"
          required
          onChange={handleChange} placeholder='First Name:' id='firstname'
        />
        <input
          className='entry'
          type="string"
          required
          onChange={handleChange} placeholder='Last Name:' id='lastname'
        />
        <input
          className='entry'
          type="tel"
          required
          onChange={handleChange} placeholder='Contact no:' id='contactNo'
        />


        <input
          className='entry'
          type="email"
          required
          onChange={handleChange} placeholder='Email address:' id='email'
        />

        <input
          className='entry'
          type="text"
          required
          onChange={handleChange} placeholder='Username' id='username'
        />
   
        <input
          className='entry'
          type="password"
          required
          onChange={handleChange} placeholder='Password:' id='password'
        />
        <input
          className='entry'
          type="number"
          required
          min="0"
          onChange={handleChange} placeholder='Age' id='age'
        />

        <br /><br />

        <button style={{ color: 'white', fontWeight: '200', fontFamily: 'Montserrat, sans-serif', padding: '13px 38px 13px 7px', width: '250px', border: 'none', borderRadius: '4px', backgroundColor: '#d1410c', cursor: 'pointer', textDecoration: 'none' }} className="logregbtn"><a style={{ textDecoration: "none", color: 'white' }} href="/Login" ><span style={{ textDecoration: "none" }} onClick={handleClick}>Register</span></a></button>
        <br />
        <hr style={{ width: '237px' }} />
       
      </div>
    </div>
    </>
  );
}

export default Create;