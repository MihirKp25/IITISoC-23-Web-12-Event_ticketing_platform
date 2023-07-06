import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapLocationDot, faArrowTrendUp, faBed, faCalendarDays, faList, faLocationDot, faUserGraduate, faMasksTheater, faHeartPulse, faGamepad, faMusic, faChildren, faClockRotateLeft, faFootball} from '@fortawesome/free-solid-svg-icons';

export default function Genre(){

    return(
        <div className="genrecontainer">
        <div className="genrebox"><FontAwesomeIcon className='genreicon' icon={faUserGraduate} /><br/>
          <span className='genrename'><b>EDUCATION</b></span>
        </div>
        <div className="genrebox"><FontAwesomeIcon className='genreicon' icon={faFootball} /><br/>
          <span className='genrename'><b>SPORTS</b></span>
        </div>
        <div className="genrebox"><FontAwesomeIcon className='genreicon' icon={faHeartPulse} /><br/>
          <span className='genrename'><b>HEALTH AND WELLNESS</b></span>
        </div>
        <div className="genrebox"><FontAwesomeIcon className='genreicon' icon={faGamepad} /><br/>
          <span className='genrename'><b>GAMING</b></span>
        </div>
        <div className="genrebox"><FontAwesomeIcon className='genreicon' icon={faMusic} /><br/>
          <span className='genrename'><b>MUSIC</b></span>
        </div>
        <div className="genrebox"><FontAwesomeIcon className='genreicon' icon={faChildren} /><br/>
          <span className='genrename'><b>KIDS</b></span>
        </div>
      </div>
    )






}