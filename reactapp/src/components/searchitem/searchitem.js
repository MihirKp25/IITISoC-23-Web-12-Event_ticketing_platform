import { Link } from "react-router-dom";
import "./searchitem.css"
import { format } from "date-fns";

const searchitem = ({ item }) => {
  return (
    <>
      
        
          <div class="col-lg-4">

            <div class="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-PYJfcaNbGeylYwwFBKhnWtmHUZKtav6IQ&usqp=CAU" class="img-fluid rounded-start" alt="..." />

              <div class="card-body">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-title">{item.desc}</p>
                <p class="card-title">{item.type}</p>
                < p class="card-title"> Scheduled on {item.date?.startDate}</p>
                <p class="card-title">Location: {item.address} ,{item.city},{item.country}</p>
                <p class="card-title">$2500 <small>min price</small></p>
                <Link to={`/event/${item._id}`}>
                  <button className="btn btn-success" >Book Now</button>
                </Link>
                <p class="card-text"></p>



              </div>
            </div>
          </div>
     
      
    </>
  )
};

export default searchitem
  ;