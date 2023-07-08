import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapLocationDot, faArrowTrendUp, faBed, faCalendarDays, faList, faLocationDot, faUserGraduate, faMasksTheater, faHeartPulse, faGamepad, faMusic, faChildren, faClockRotateLeft, faFootball} from '@fortawesome/free-solid-svg-icons';

export default function Genre(){

    return(
        <div className="genrecontainer">
        <div className="genrebox"><FontAwesomeIcon className='genreicon' icon={faUserGraduate} /><br/>
          <span className='genrename'><b>MUSIC CONCERTS</b></span>
        </div>
        <div className="genrebox"><FontAwesomeIcon className='genreicon' icon={faFootball} /><br/>
          <span className='genrename'><b>SPORTS EVENTS</b></span>
        </div>
        <div className="genrebox"><FontAwesomeIcon className='genreicon' icon={faHeartPulse} /><br/>
          <span className='genrename'><b>HEALTH AND WELLNESS</b></span>
        </div>
        <div className="genrebox"><FontAwesomeIcon className='genreicon' icon={faGamepad} /><br/>
          <span className='genrename'><b>DANCE </b></span>
        </div>
        <div className="genrebox"><FontAwesomeIcon className='genreicon' icon={faMusic} /><br/>
          <span className='genrename'><b>WORKSHOPS AND CLASSES</b></span>
        </div>
        <div className="genrebox"><FontAwesomeIcon className='genreicon' icon={faChildren} /><br/>
          <span className='genrename'><b>KIDS , GAMING</b></span>
        </div>
      </div>
    )






}