import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser} from '@fortawesome/free-solid-svg-icons'
import image from '../images/logo.png'
import '../navbar/Navbar.css';
import { AuthContext} from "../../hooks/context/AuthContext";
import { useContext } from 'react';
import { useState, useRef } from 'react';
import a from "../userprofile/profilepic.jpg"
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
          
         <h2 className='headername'>𝕰𝖛𝖊𝖓𝖙𝖁𝖎𝖇𝖊</h2>

        </div>

        <ul className="navul">
          <li className='navbarli'><a className="navbari" href = "/">𝐇𝐨𝐦𝐞</a></li>
          <li className='navbarli'><a className="navbari" href = "/event">𝐂𝐫𝐞𝐚𝐭𝐞</a></li>
          <li className='navbarli'><a className="navbari" href = "/list">𝐁𝐨𝐨𝐤</a></li>
          

        
        
          <li className='navbarli'><a className="navbari"href = "/AboutUs">𝐀𝐛𝐨𝐮𝐭 𝐔𝐬</a></li>
        </ul>

        <div className='logoutnname'>
        {  user ? (
        <div className='userInfoNav'>
        <span className="logout" onClick={handleClick}>𝐋𝐨𝐠𝐨𝐮𝐭</span> 
        <a href='/user/profile'> <div className='userImage'> <img style={{height:"35px", width:"35px", borderRadius:"50%",}} src={user.image ||a}/></div>   </a> 
         </div>
        ) :  
        
        <div className="userInfoNav">
          <span className="logout" >   <a className='auth' href='/register'>𝐑𝐞𝐠𝐢𝐬𝐭𝐞𝐫</a> </span>
           <span className="logout" >  <a className='auth' href='/login'>𝐋𝐨𝐠𝐢𝐧</a> </span> 
       
        </div>
         }
        </div>
        </div>
     
    </>
  );
}

export default Navbar;

