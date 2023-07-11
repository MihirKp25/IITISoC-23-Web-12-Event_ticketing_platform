import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser} from '@fortawesome/free-solid-svg-icons'
import image from '../images/logo.png'
import '../navbar/Navbar.css';
import { AuthContext} from "../../hooks/context/AuthContext";
import { useContext } from 'react';
import { useState, useRef } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {
  
  const [isActive, setisActive] = useState(false);

  const {user,dispatch} =useContext(AuthContext);
  const handleClick=()=>{
   
      toast.info('Logout Succesfully ', {
        position: toast.POSITION.TOP_CENTER
    });
    
    dispatch({ type: "LOGOUT" });
  }

  return (
    <>
    <ToastContainer/>
      <div className='navbar'>
   
        <div className="navnamenlogo">
          
         
          <a href="/"><img src={image} alt="" className="logo" /></a>

        </div>

        <ul className="navul">
          <li className='navbarli'><a className="navbari"href = "/">HOME</a></li>
          <li className='navbarli'><a  href = "/list" className="dropdown-btn navbari"  onMouseOut={(e)=>{setisActive(!isActive)}}>BOOK{isActive && (<div onMouseOver={(e)=>{setisActive(true)}}className='dropdown-content' style={{textDecoration:'none', position:'absolute'}}><span className="dropdown-item"><a className='navdropdown' href = "/booked/event">Booked events</a></span></div>)}</a></li>

          <li className='navbarli'><a  href = "/event" className="dropdown-btn navbari"  onMouseOut={(e)=>{setisActive(!isActive)}}>Create{isActive && (<div onMouseOver={(e)=>{setisActive(true)}}className='dropdown-content' style={{textDecoration:'none', position:'absolute'}}><span className="dropdown-item"><a className='navdropdown' href = "/created/event">Created events</a></span></div>)}</a></li>
          
        
          <li className='navbarli'><a className="navbari"href = "/AboutUs">ABOUT US</a></li>
        </ul>

        <div className='logoutnname'>
        {  user ? (<><span className="usernameo"style={{color:"white", paddingRight:"50px"}} onClick={handleClick}>Logout</span> <span className="usernameo"style={{color:"white"}}>{user.firstname}</span></>) :   <div className="icons" style={{display:'flex'}}>
          <li className='iconli'><a href="/register"><FontAwesomeIcon icon={faMagnifyingGlass} className='search' />Register</a></li>
         <li className='iconli'><a href="/Login"><FontAwesomeIcon icon={faUser} className='search'/>Login</a></li> 
        
        </div> }
        </div>
     
      </div>

      

     
    </>
  );
}

export default Navbar;
