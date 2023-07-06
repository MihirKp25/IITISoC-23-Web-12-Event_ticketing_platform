import useFetch from '../../hooks/useFetch';

import g from '../images/p1.jpg';
import h from '../images/p2.jpeg';
import i from '../images/p3.jpeg';
import j from '../images/p4.jpeg';
import k from '../images/p5.jpeg';
import l from '../images/p6.jpeg';
 import CountDown from '../functions/countdown'



export default function Event(){
  const { data, loading, error } = useFetch("/event/online?featured=true");
  console.log(data);


 return (
    <div className="main-scroll-div">
    <div className="cover">
      <div className="trendcont">
        {data.map(event=>(
         
          <div className="trendbox"> <img className="trendboximg" src={event.photos[0]}></img>
          {/* <p><CountDown Eventdate={event.date}/></p> */}
          <div className="trendboxcont">
          <p>{event.date}</p>
          <p>{event.desc}</p>
          <p>{event.city} ,{event.country}</p>
          <p>{event.type}</p>
          <p>ONLINE MODE</p>
          </div>
       </div>
        ))}
      
      </div>
    </div>
  </div>
 )



}