import { Link } from "react-router-dom";
import "./searchitem.css"

const searchitem= ({item}) => {
    return ( 
       <>
      
  <div class="card ">
  <div class="row g-0">
    <div class="col-md-4 mt-4 pt-3">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-PYJfcaNbGeylYwwFBKhnWtmHUZKtav6IQ&usqp=CAU" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8 mt-4">
      <div class="card-body">
      <h5 class="card-title">{item.name}</h5>
      <p class="card-title">{item.desc}</p>
      <p class="card-title">{item.type}</p>
     < p class="card-title"> Scheduled on {item.date}</p>
     <p class="card-title">Location: {item.address} ,{item.city},{item.country}</p>
      <p class="card-title">$2500 <small>min price</small></p>
     <Link to={`/event/${item._id}`}>
      <button className="btn btn-success" >Book Now</button>
      </Link>
        <p class="card-text"></p>
       
      </div>
    </div>
  </div>
  </div>
      </>
     )
};
 
export default searchitem
;