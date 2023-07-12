import React, { useRef } from 'react'
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faUserPen } from '@fortawesome/free-solid-svg-icons';
// import { SearchContext } from '../../hooks/context/SearchContext';
// import { AuthContext } from '../../hooks/context/AuthContext';
import {SearchContext} from '../../../hooks/context/SearchContext';
import {AuthContext} from '../../../hooks/context/AuthContext';
import { useHistory} from "react-router-dom";
import './Edit.css';
import a from '../profilepic.jpg'
export default function edit() {
//     const {user}=useContext(AuthContext);
//     const navigate=useHistory(); 
//   const {dispatch}=   useContext(SearchContext);

const Editbutton = document.querySelector('#b7b');
const EditBtn=()=>{
        Editbutton.style.disabled=false;
}
  return (
    
        <div className=''><div className="b1b">ACCOUNT DETAILS</div><br/>
            <div className="asdfg" style={{textAlign:'center'}}><b id = "b3b">PROFILE PICTURE</b>
                 <img src={a} alt="" className="ai" /><br/>
                 <br/>
                 {/* <button className='openModalBtn' id = "b5b" >tap to change</button> */}
                 

                 <label htmlFor="file" id= "b5b"style={{backgroundColor:'rgb(245,69,118)',color:'white', borderRadius:'5px'}}>
                CHANGE IMAGE</label>
              <input
                type="file"
                id="file"
                multiple
                // onChange={(e) => setFiles(e.target.files)}
                style={{ display: "none" }}
              />
                 </div> 
                 <div className='asdfg'style={{textAlign:'center', textDecoration:'underline'}}><b id = "b3b">PERSONAL INFORMATION</b></div>    
            <div className="asdf">
                
                    <div className='formInput' id = "b8b"><b><label className='inputlabel' id = "b6b">first name:<br/></label></b><input className='inputstyle' id = "b7b"placeholder='enter specific schema attribute'disabled={true}></input></div>
                    <div className='formInput' id = "b8b"><b><label className='inputlabel' id = "b6b">last name:<br/></label></b><input className='inputstyle' id = "b7b"placeholder='enter specific schema attribute'disabled={true}></input></div>
                    <div className='formInput' id = "b8b"><b><label className='inputlabel' id = "b6b">username:<br/></label></b><input className='inputstyle' id = "b7b"placeholder='enter specific schema attribute'disabled={true}></input></div>
                    <div className='formInput' id = "b8b"><b><label className='inputlabel' id = "b6b">email ID:<br/></label></b><input className='inputstyle' id = "b7b"placeholder='enter specific schema attribute'disabled={true}></input></div>
                    <div className='formInput' id = "b8b"><b><label className='inputlabel' id = "b6b">Address:<br/></label></b><input className='inputstyle' id = "b7b"placeholder='enter specific schema attribute'disabled={true}></input><br/></div>
                    <div style={{display:'flex', justifyContent:'center'}}><button className="openModalBtn" id = "b4b"
                    onClick={EditBtn}
                    >EDIT</button></div>
                    
            </div>   <br/><br/>
            
            

        </div>
      
  
  )
}
