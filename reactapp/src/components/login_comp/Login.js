import './Login.css';
import logo from '../images/loglogo.png'
import { useState } from "react";
// import { useHistory } from "react-router-dom";

const Create = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//   const history = useHistory();

  const handleSubmit = (e) => {
    // e.preventDefault();
    // const blog = { title, body, author };

    // fetch('http://localhost:8000/blogs/', {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(blog)
    // }).then(() => {
    //   history.go(-1);
    //   history.push('/');
    // })
  }

  return (
  <div className="flex"> 
    <div className="left"></div>
    <div className="create">
        <img src={logo} alt="" style={{width:'200px'}}className="loglogo" />
      <h2 style={{fontSize:'48px', fontWeight:'1000'}}><b>Log in</b></h2>
      <form onSubmit={handleSubmit}>
        <input 
          className='entry'
          type="email" 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)} placeholder='Email address:'
        />
        <input 
          className='entry'
          type="password" 
          required 
          value={password}
          onChange={(e) => setPassword(e.target.value)} placeholder='Password:'
        />
        <br /><br />
        
        <button style={{color:'white',fontWeight:'200',fontFamily:'Montserrat, sans-serif',padding:'13px 38px 13px 7px', width:'250px',border:'none',borderRadius:'4px', backgroundColor:'#d1410c', cursor:'pointer', textDecoration:'none'}} className="logregbtn"><a href="/"  style={{textDecoration:"none", color:'white'}} ><span style={{textDecoration:"none"}}>Login</span></a></button>
      </form><br/>
      <hr style={{width:'237px'}}/>
      <span style={{fontSize:'13px'}}>Don't have an account? <span style={{cursor:'pointer',color:'#d1410c'}}><a href="/Register" style ={{textDecoration:'none', color:'#d1410c'}}>Sign up!</a></span></span>
    </div>
   </div> 

  );
}
 
export default Create;