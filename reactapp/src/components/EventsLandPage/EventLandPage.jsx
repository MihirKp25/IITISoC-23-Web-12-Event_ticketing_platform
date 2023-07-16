import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import g from '../images/p1.jpg';
import h from '../images/p2.jpeg';
import i from '../images/p3.jpeg';
import j from '../images/p4.jpeg';
import k from '../images/p5.jpeg';
import l from '../images/p6.jpeg';
import a from "../images/cntr1.jpg"
import CountDown from '../functions/countdown'
import { format } from "date-fns";
import Card from 'react-bootstrap/Card';
  import ListGroup from 'react-bootstrap/ListGroup';



export default function Event() {
  const { data, loading, error } = useFetch("http://localhost:3000/event/online?featured=true");
  console.log(data);


  {/* 
  
  export default function Event () {

    const { data, loading, error } = useFetch("http://localhost:3000/event/online?featured=true");
    console.log(data);
    return (
      <>
      {data.map(event=>(
        <Link
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="{event.photos[0]}" />
        <Card.Body>
          <Card.Title>{event.name}</Card.Title>
         
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.event>{event.city} ,{event.country}</ListGroup.event>
          <ListGroup.event>{event.type}</ListGroup.event>
          <ListGroup.event>{event.date?.startDate} to {event.date?.endDate} </ListGroup.event>
        </ListGroup>
      
      </Card>

     </>);
  }
  
export default KitchenSinkExample;*/}



return (
  <div className="main-scroll-div">
    <div className="cover ">
      <div className="trendcont">
          {data.map(event => (
            <Link to={`/event/${event._id}`}>
               <Card style={{ width: '18rem' ,margin:"2rem"}}>
      <Card.Img variant="top" src={event.photos[0] || "http://res.cloudinary.com/dg7seerl9/image/upload/v1689512962/upload/ogw0ec9vuandxuasonsw.png"} />
      <Card.Body>
        <Card.Title ><b>{event.name}</b></Card.Title>
        {/* <Card.Title ><b> Scheduled on</b>: {startDate} - {endDate}</Card.Title> */}
        <Card.Title ><b>Type</b>: {event.type} </Card.Title>  
        <Card.Title ><b>Location</b>: {event.address} ,{event.city},{event.country}</Card.Title>       
      </Card.Body>

     
    </Card>

          </Link>
          ))}

        </div>
      </div>
    </div>
  )



}