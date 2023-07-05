import "./createEvent.css";
import Navbar from "../navbar/Navbar";
import { useState } from "react";
import { EventInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import NewTicket from "../createTicket/createTicket";


const NewEvent = () => {
  const [numTicketTypes, setNumTicketTypes] = useState(1)
  // const [files, setFiles] = useState("");
  const [responseValue, setResponseValue] = useState(null);
  const [info, setInfo] = useState({});
  const [ticketModal, setTicketModal] = useState(false);
  const [tickets, setTickets] = useState([]);

  const { data, loading, error } = useFetch("/event");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    setNumTicketTypes(e.target.value);
  };

    // const handleSelect = (e) => {
    //   const value = Array.from(
    //     e.target.selectedOptions,
    //     (option) => option.value
    //   );
    //   setTickets(value);
    // };

  // console.log(value)

  const handleClick = async (e) => {
    e.preventDefault();
    try {
     const newevent={...info};
      console.log(info);
      const response=await axios.post("/event", newevent);
      setResponseValue(response.data);
      console.log(response.data);
      setTicketModal(true);
      }
       catch (err) { console.log(err) }
  };
 
  return (
    <div className="new">
      <Navbar />

      <div className="newContainer" style={{margin:100}}>
        <div className="top">
          <h1><b>Add New Event</b></h1>
        </div>

        <div className="right">
          <form className="inputform">

            {EventInputs.map((input) => (
              <div className="formInput" key={input.id}>
              <b><label className="inputlabel">{input.label}</label></b><br/>
              <input className="inputstyle"
                id={input.id}
                onChange={handleChange}
                type={input.type}
                placeholder={input.placeholder} required
              />
            </div>
            ))}
            <div className="formInput">
              <label className="inputlabel">Featured&ensp;</label>
              <select className="inputoption" id="featured" onChange={handleChange}>
                <option className="inputoption"value={false}>No</option>
                <option className="inputoption"value={true}>Yes</option>
              </select>
            </div>
            <div className="formInput">
              <label className="inputlabel">Free or Paid &ensp; </label>
              <select className="inputoption" id="freeOrPaid" onChange={handleChange}>
                <option className="inputoption"value={true}>Free</option>
                <option className="inputoption"value={false}>Paid</option>
              </select>
            </div>
            <p>How many ticket types you want to keep</p>
      <input
        type="number"
        id="numTicketTypes"
        
        onChange={handleChange}
      />
            {/* <div className="selectTickets">
                <label>Tickets</label>
                <select id="tickets" multiple onChange={handleSelect}>
                  {loading
                    ? "loading"
                    : data &&
                      data.map((ticket) => (
                        <option key={ticket._id} value={ticket._id}>
                          {ticket.title}
                        </option>
                      ))}
                </select>
              </div> */}

            <div style={{textAlign:"center", alignItems:"center", marginLeft:'460px'}}>
            <button className="createtktbtn"onClick={handleClick}>Move to Create Ticket</button>
            </div>
          </form>
        </div>
      </div>
     
      
   
  
    { ticketModal && Array.from({ length: numTicketTypes }).map(() => (
        <NewTicket infoEvent={responseValue}  />
      ))}
        
       

    
    </div>

  );
};

export default NewEvent;







