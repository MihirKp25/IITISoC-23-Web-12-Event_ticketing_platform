import "./createEvent.css";
import Navbar from "../navbar/Navbar";
import { useState } from "react";
import { EventInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import NewTicket from "../createTicket/createTicket";
import ViewCreatedEvents from "../viewCreatedEvents/viewCreatedEvents";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp} from '@fortawesome/free-solid-svg-icons';


const NewEvent = () => {
  const [files, setFiles] = useState("");
  const [responseValue, setResponseValue] = useState(null);
  const [info, setInfo] = useState({});
  const [ticketModal, setTicketModal] = useState(false);
  const [tickets, setTickets] = useState([]);

  const { data, loading, error } = useFetch("/event");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
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
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dg7seerl9/image/upload",
            data
          );

          const { url } = uploadRes.data;
          
        })
      );

    

     const newevent={...info, photos: list,};
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
        <div className="top tip">
          <h1 className="toptitle"><b>Add New Event</b></h1>
        </div>

        <div className="right">
          <form className="inputform">
          <div className="formInput">
                <label htmlFor="file">
                  Images: <FontAwesomeIcon icon={faArrowUp} className='arrowright' />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

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

            <div classname = "qwert">
            <button className="createtktbtn"onClick={handleClick}>Move to Create Ticket</button>
            </div>
          </form>
        </div>
      </div>
      {ticketModal && 
      <NewTicket infoEvent={responseValue}/>
      }

        
        <ViewCreatedEvents/>

    
    </div>

  );
};

export default NewEvent;







