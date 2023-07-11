import "./createEvent.css";
import Navbar from "../navbar/Navbar";
import { useState } from "react";
import { EventInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import NewTicket from "../createTicket/createTicket";
import ViewCreatedEvents from "../viewCreatedEvents/viewCreatedEvents";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faFileImage, faImage, faImagePortrait, faTimesRectangle } from '@fortawesome/free-solid-svg-icons';
import { DateRangePicker } from 'react-date-range';
import { DateRange } from 'react-date-range';
import { format } from "date-fns";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


const NewEvent = () => {
  const [opencal, setopencal] = useState(false);
  const clickopencal = () => {
    setopencal(true);
  }
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [numTicketTypes, setNumTicketTypes] = useState(1)
  const [files, setFiles] = useState("");
  const [responseValue, setResponseValue] = useState(null);
  const [info, setInfo] = useState({});
  const [ticketModal, setTicketModal] = useState(false);
  const [tickets, setTickets] = useState([]);

  const { data, loading, error } = useFetch("http://localhost:3000/event");

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

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
      setIsButtonDisabled(true);
      toast.success('Event Created Succesfully , Please Move to create Tickets', {
        position: toast.POSITION.TOP_CENTER
    });
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
          return url;
        })
      );



      const newevent = { ...info, photos: list, date: date[0] };
      console.log(list);
      const response = await axios.post("/event", newevent);
      setResponseValue(response.data);
      console.log(response.data);
      setTicketModal(true);
    }
    catch (err) { console.log(err) }
  };

  return (
    <div className="new">
      <Navbar />
   <ToastContainer/>
      <div className="newContainer" style={{ margin: 100 }}>
        <div className="top tip">
          <h1 className="toptitle"><b>Add New Event</b></h1>
          <small>* Please ensure that you fill the form precisely, further once created event <b>CANNOT</b> be updated </small>
        </div>




        <div className="right">

          <form className="inputform">
       
            <div className="formInput">
              <label htmlFor="file">
                Images: <FontAwesomeIcon icon={faImage} className='arrowright' />
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
                <b><label className="inputlabel">{input.label}</label></b><br />
                <input className="inputstyle"
                  id={input.id}
                  onChange={handleChange}
                  type={input.type}
                  placeholder={input.placeholder} required
                  disabled={isButtonDisabled}
                  style={{ backgroundColor: isButtonDisabled ? 'lightgrey' : 'rgb(235, 222, 204)' }}
                />
              </div>
            ))}
            <div className="formInput">
              <label className="inputlabel">Free/Paid&ensp;</label>
              <select className="inputoption" id="featured" onChange={handleChange} disabled={isButtonDisabled}>
                <option className="inputoption" value={false}>Paid</option>
                <option className="inputoption" value={true}>Free</option>
              </select>
            </div>
            <p className="inputlabel" >How many ticket types you want to keep</p>
            <input
              type="number"
              id="numTicketTypes"
              disabled={isButtonDisabled}
              onChange={handleChange}
            />
            <div className="formInput">
              <span id='s'>Select Date :</span><br />
              <label id='s'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</label><br />
              {!isButtonDisabled &&
              <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                minDate={new Date()}
               
              />}
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

            <div classname="qwert">
              <button className="createtktbtn" onClick={handleClick}>Move to Create Ticket</button>
              
            </div>
            {isButtonDisabled &&
            <small>*Event is Created and form is <b>LOCKED</b>  please create Tickets</small>}
          </form>
        </div>
      </div>
      
      {ticketModal && Array.from({ length: numTicketTypes }).map((_, index) => (
        <NewTicket infoEvent={responseValue} index={index}/>
      ))}



    </div>

  );
};

export default NewEvent;







