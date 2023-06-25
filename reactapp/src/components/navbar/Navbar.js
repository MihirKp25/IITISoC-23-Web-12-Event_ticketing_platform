import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser} from '@fortawesome/free-solid-svg-icons'
import image from '../images/logo.png'
import '../navbar/Navbar.css';
function Navbar() {
  return (
    <>

      <div className='navbar'>
   
        <div className="navnamenlogo">
          
         
          <a href="/"><img src={image} alt="" className="logo" /></a>

        </div>

        <ul className="navul">
          <li className='navbarli'><a className="navbari"href = "/">HOME</a></li>
          <li className='navbarli'><a className="navbari"href = "/Book">BOOK</a></li>
          <li className='navbarli'><a className="navbari" href = "/event">CREATE</a></li>
          <li className='navbarli'><a className="navbari"href = "/About">ABOUT US</a></li>
        </ul>

        <div className="icons" style={{display:'flex'}}>
          <li className='iconli'><a href="#searchbox"><FontAwesomeIcon icon={faMagnifyingGlass} className='search' /></a></li>
          <li className='iconli'><a href="/Login"><FontAwesomeIcon icon={faUser} className='search'/></a></li>
        </div>
     
      </div>

      

     
    </>
  );
}

export default Navbar;
