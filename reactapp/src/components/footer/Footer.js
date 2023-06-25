import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
        <hr className='line'/>
        <div className="wer">
        <div className="footercontent">
            <span className="title">SOLUTIONS</span><br/>
            <span className="contenttitle">Industrial Cybersecurity<br/></span>
            <span className="contenttitle"> Healthcare Cybersecurity<br/></span>
            <span className="contenttitle">Commercial Cybersecurity</span>
          
        </div>
        <div className="footercontent">
            <span className="title">RESOURCES</span><br/>
            <span className="contenttitle">Research</span><br/>
            <span className="contenttitle">PGP Key<br/></span>
        </div>
        <div className="footercontent">
            <span className="title">ABOUT</span><br/>
            <span className="contenttitle">About us</span><br/>
            <span className="contenttitle">Newsroom<br/></span>
        </div>

        </div>
        <div className="connect">
            <div className="smicon"><FontAwesomeIcon icon={faTwitter} className='smicon' /></div>
            <div className="smicon"><FontAwesomeIcon icon={faInstagram} className='smicon' /></div>
            <div className="smicon"><FontAwesomeIcon icon={faLinkedin} className='smicon' /></div>
        </div>
        
    </div>
  )
}
