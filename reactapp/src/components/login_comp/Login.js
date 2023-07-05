import './Login.css';
import logo from '../images/loglogo.png'
import { useContext, useState } from "react";
import { useHistory} from "react-router-dom";
import axios from 'axios';
import {AuthContext} from "../../hooks/context/AuthContext";
import Navbar from '../navbar/Navbar';

const Create = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  
  const navigate=useHistory(); 
  const { loading, error, dispatch } = useContext(AuthContext);

 // const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      if (res.data.isAdmin || !res.data.isAdmin) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });

        navigate.push("/");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed!" },
        });
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (<>
    <Navbar/>
  <div className="flex"> 
    <div className="left"></div>
    <div className="create">
        <img src={logo} alt="" style={{width:'200px'}}className="loglogo" />
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
        
        <button style={{color:'white',fontWeight:'200',fontFamily:'Montserrat, sans-serif',padding:'13px 38px 13px 7px', width:'250px',border:'none',borderRadius:'4px', backgroundColor:'#d1410c', cursor:'pointer', textDecoration:'none'}} className="logregbtn"><a href="/"  style={{textDecoration:"none", color:'white'}} onClick={handleClick} ><span style={{textDecoration:"none"}}>Login</span></a></button>
      <br/>
      <hr style={{width:'237px'}}/>
      <span style={{fontSize:'13px'}}>Don't have an account? <span style={{cursor:'pointer',color:'#d1410c'}}><a href="/Register" style ={{textDecoration:'none', color:'#d1410c'}}>Sign up!</a></span></span>
    </div>
   </div> 
   </>
  );
}
 
export default Create;