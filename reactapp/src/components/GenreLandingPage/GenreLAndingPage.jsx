import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapLocationDot, faArrowTrendUp, faBed, faCalendarDays, faList, faLocationDot, faUserGraduate, faMasksTheater, faHeartPulse, faGamepad, faMusic, faChildren, faClockRotateLeft, faFootball} from '@fortawesome/free-solid-svg-icons';
import EventCard from '../EventByType/EventByType';

export default function Genre(){

    return(
        <div className="genrecontainer">
        <div className="genrebox"><FontAwesomeIcon className='genreicon' icon={faUserGraduate} /><br/>
         <EventCard type="Music"/>
        </div>
        <div className="genrebox"><FontAwesomeIcon className='genreicon' icon={faFootball} /><br/>
        <EventCard type="Sports"/>
        </div>
        <div className="genrebox"><FontAwesomeIcon className='genreicon' icon={faHeartPulse} /><br/>
        <EventCard type="Health"/>
        </div>
        <div className="genrebox"><FontAwesomeIcon className='genreicon' icon={faGamepad} /><br/>
        <EventCard type="Dance"/>
        </div>
        <div className="genrebox"><FontAwesomeIcon className='genreicon' icon={faMusic} /><br/>
        <EventCard type="Festival"/>
        </div>
        <div className="genrebox"><FontAwesomeIcon className='genreicon' icon={faChildren} /><br/>
        <EventCard type="Gaming"/>
        </div>
      </div>
    )






}