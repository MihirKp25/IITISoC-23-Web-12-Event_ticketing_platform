import './login.css';

import { useContext, useState } from "react";
import { useNavigate} from "react-router-dom";
import axios from 'axios';
import {AuthContext} from "../../context/Authcontext";


const Create = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  
  const navigate=useNavigate(); 
  const { loading, error, dispatch } = useContext(AuthContext);

 // const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
//  const notify=()=>{toast("Wow so easy!");};
  const handleClick = async (e) => {
     e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:3000/auth/login", credentials);
      console.log(res.data);
      if (res.data.isMajorAdmin) {
       
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        // notify();
        localStorage.setItem('jwtToken', res.data.token);
        navigate("/");
       
        
      } else {
       
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed!" },
          
        });
      
      }
    } catch (err) {
     
    console.log(err);
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    
    }
  };

  return (<>
    
  <div className="flex"> 
    <div className="left1"></div>
    <div className="create">
       
      <h2 style={{fontSize:'48px', fontWeight:'1000'}}><b>Log in</b></h2>
      
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
        <br /><br />
        
        <button style={{color:'white',fontWeight:'200',fontFamily:'Montserrat, sans-serif',padding:'13px 38px 13px 7px', width:'250px',border:'none',borderRadius:'4px', backgroundColor:'#d1410c', cursor:'pointer', textDecoration:'none'}} className="logregbtn"><a href="/"  style={{textDecoration:"none", color:'white'}} onClick={handleClick} ><span style={{textDecoration:"none"}}>Login </span></a></button>
      <br/>
      {/* <ToastContainer /> */}
      <hr style={{width:'237px'}}/>
    
    </div>
   </div> 
  
   </>
  );
}
 
export default Create;