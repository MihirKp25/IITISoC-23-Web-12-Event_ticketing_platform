import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapLocationDot, faArrowTrendUp, faBed, faCalendarDays, faList, faLocationDot, faUserGraduate, faMasksTheater, faHeartPulse, faGamepad, faMusic, faChildren, faClockRotateLeft, faFootball} from '@fortawesome/free-solid-svg-icons';

export default function Genre(){

    return(
        <div className="genrecontainer">
        <div className="genrebox"><FontAwesomeIcon className='genreicon'style={{fontSize:'35', paddingTop:'15px'}} icon={faUserGraduate} /><br/>
          <span><b>EDUCATION</b></span>
        </div>
        <div className="genrebox"><FontAwesomeIcon className='genreicon'style={{fontSize:'35', paddingTop:'15px'}} icon={faFootball} /><br/>
          <span><b>SPORTS</b></span>
        </div>
        <div className="genrebox"><FontAwesomeIcon className='genreicon'style={{fontSize:'35', paddingTop:'15px'}} icon={faHeartPulse} /><br/>
          <span><b>HEALTH AND WELLNESS</b></span>
        </div>
        <div className="genrebox"><FontAwesomeIcon className='genreicon'style={{fontSize:'35', paddingTop:'15px'}} icon={faGamepad} /><br/>
          <span><b>GAMING</b></span>
        </div>
        <div className="genrebox"><FontAwesomeIcon className='genreicon'style={{fontSize:'35', paddingTop:'15px'}} icon={faMusic} /><br/>
          <span><b>MUSIC</b></span>
        </div>
        <div className="genrebox"><FontAwesomeIcon className='genreicon'style={{fontSize:'35', paddingTop:'15px'}} icon={faChildren} /><br/>
          <span><b>KIDS</b></span>
        </div>
      </div>
    )






}