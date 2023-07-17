import React, { useRef } from 'react'
import { useContext , useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faUserPen } from '@fortawesome/free-solid-svg-icons';
// import { SearchContext } from '../../hooks/context/SearchContext';
// import { AuthContext } from '../../hooks/context/AuthContext';
import {SearchContext} from '../../../hooks/context/SearchContext';
import {AuthContext} from '../../../hooks/context/AuthContext';
import { useHistory} from "react-router-dom";
import './Edit.css';
import a from '../profilepic.jpg'
import axios from "axios"
import useFetch from '../../../hooks/useFetch';



export default function Edit() {
   const {user}=useContext(AuthContext);
   const [isInputDisabled, setIsInputDisabled] = useState(true);
   const [isImageSelected, setIsImageSelected] = useState(false);
   const [file, setFile] = useState("");
   const [info, setInfo] = useState({firstname:"", lastname:"", username:"", email:"",age:""});

const navigate =useHistory();
const userforimg=useFetch(`http://localhost:3000/user/${user._id}`)

useEffect(() => {
  fetchUserProfile();
  // reFetch();
}, []);

const fetchUserProfile = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/user/${user._id}`, {
      headers: {
        'Cache-Control': 'no-cache',
      },
    });
    setInfo(response.data);
  } catch (error) {
    console.log('Error fetching user profile:', error);
  }
};

const handleChange = (e) => {
  setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
};

const SubmitImage = async(e) => {
  e.preventDefault();
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "upload");
 try{ 
   const uploadRes = await axios.post(
     "https://api.cloudinary.com/v1_1/dg7seerl9/image/upload", data);

   const { url } = uploadRes.data;
   console.log(url);
   
   const updatedUser = {
    image:url,
 };
  //console.log(updatedUser);
 const result= await axios.put(`http://localhost:3000/user/${user._id}`, updatedUser);

  setIsImageSelected(!isImageSelected);
 console.log(result);
 navigate.push('/user/profile');
}
 catch(err){
   console.log(err);
 }
  
};

const handleSubmitButton = async (e) => {
       e.preventDefault();
    
      try{
       
     
      const result= await axios.put(`http://localhost:3000/user/${user._id}`, info);

     await fetchUserProfile();
      setIsInputDisabled(!isInputDisabled);

      console.log(result);
      navigate.push('/user/profile');
    }
      catch(err){
        console.log(err);
      }

};
  return (
    
        <div className=''><div className="b1b">Account Details</div><br/>
            <div className="asdfg" style={{textAlign:'center'}}>
                 <img src={userforimg.data?.image || a}  style={{width:"200px", height:"270px"}}  alt="" className="ai" /><br/>
                 <br/>
                 {/* <button className='openModalBtn' id = "b5b" >tap to change</button> */}
                 

                
                <div className="formInput">
                <label htmlFor="file" id= "b5b"style={{backgroundColor:'rgb(245,69,118)',color:'white', borderRadius:'5px'}} onClick={()=>{ setIsImageSelected(!isImageSelected)}}>
                Change Image</label>
                { isImageSelected &&
                <label htmlFor="file" id= "b5b"style={{backgroundColor:'rgb(245,69,118)',color:'white', borderRadius:'5px'}} onClick={SubmitImage}>
                upload</label>}
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
                 </div> 
                 <div className='asdfg'style={{textAlign:'center', textDecoration:'underline'}}><b id = "b3b">Personal Information</b></div>    
            <div className="asdf">
                
                    <div className='formInput' id = "b8b"><b><label className='inputlabel' id = "b6b">first name:<br/></label></b><input className='inputstyle' id = "firstname" value={info.firstname}  disabled={isInputDisabled} onChange={handleChange}/></div>
                    <div className='formInput' id = "b8b"><b><label className='inputlabel' id = "b6b">last name:<br/></label></b><input className='inputstyle' id = "lastname" value={info.lastname} disabled={isInputDisabled} onChange={handleChange}/></div>
                    <div className='formInput' id = "b8b"><b><label className='inputlabel' id = "b6b">username:<br/></label></b><input className='inputstyle' id = "username" value={info.username} disabled={isInputDisabled} onChange={handleChange}/></div>
                    <div className='formInput' id = "b8b"><b><label className='inputlabel' id = "b6b">email ID:<br/></label></b><input className='inputstyle' id = "email"value={info.email} disabled={isInputDisabled} onChange={handleChange}/></div>
                    <div className='formInput' id = "b8b"><b><label className='inputlabel' id = "b6b">Age:<br/></label></b><input className='inputstyle' id = "age" value={info.age} disabled={isInputDisabled} onChange={handleChange}/><br/></div>

                  { isInputDisabled ? 
                      <div style={{display:'flex', justifyContent:'center'}}><button className="openModalBtn" id = "b4b" onClick={()=>{   setIsInputDisabled(!isInputDisabled); }}>EDIT</button></div>

                    :
                    <div style={{display:'flex', justifyContent:'center'}}><button className="openModalBtn" id = "b4b" onClick={handleSubmitButton}>Submit</button></div>
                  }
            </div>   <br/><br/>
            
            

        </div>
      
  
  )
}
