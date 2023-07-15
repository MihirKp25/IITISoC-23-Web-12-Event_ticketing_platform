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
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
  // const [info, setInfo] = useState({});
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


  /*
    const handleChange = (e) => {
      setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
      setNumTicketTypes(e.target.value);
    };
  
  
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
        const response = await axios.post("http://localhost:3000/event", newevent);
        setResponseValue(response.data);
        console.log(response.data);
        setTicketModal(true);
      }
      catch (err) { console.log(err) }
    };
  */
  const formik = useFormik({
    initialValues: {
      name: "",
      type: "",
      address: "",
      city: "",
      country: "",
      description: "",
      
      time: "",
      freeOrPaid: false

    },
    validationSchema: Yup.object({
      name: Yup.string().required('name is required').max(15, "name can be only 15 character long"),
      type: Yup.string().required('type is required'),
      address: Yup.string().required("address is required"),
      city: Yup.string().required("city is required"),
      country: Yup.string().required("country is required"),
      description: Yup.string().required("Description is required").max(100, "Description must be less than 100 words"),
     
      time: Yup.string().required("Time is required"),
    }),

    onSubmit: async (values) => {

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
            console.log(url);
          })
        );



        const newevent = { ...values, photos: list, date: date[0] };
        console.log(newevent);
        const response = await axios.post("http://localhost:3000/event", newevent);
        setResponseValue(response.data);
        console.log(response.data);
        setTicketModal(true);
      }
      catch (err) { console.log(err) }
    },
  });


  return (
    <div className="new">
      <Navbar />
      <ToastContainer />
      <div className="newContainer" style={{ margin: 100 }}>
        <div className="top tip">
          <h1 className="toptitle"><b>Add New Event</b></h1>
          <small>* Please ensure that you fill the form precisely, event once created, <b>CANNOT</b> be updated later.</small>
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



            <div className="formInput">
             
                <b><label className="inputlabel">Name:</label></b><br />
                <input className="inputstyle"
                  id="name"
                  type="text"

                  disabled={isButtonDisabled}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ backgroundColor: isButtonDisabled ? 'lightgrey' : 'rgb(235, 222, 204)' }}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div style={{ color: "red", marginTop: "2px", fontSize: "15px" }}>{formik.errors.name}</div>
                ) : null}
              </div>

              <div className="formInput">
                <b><label className="inputlabel">Type:</label></b><br />
                <input className="inputstyle"
                  id="type"
                  type="text"
                 
                  disabled={isButtonDisabled}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ backgroundColor: isButtonDisabled ? 'lightgrey' : 'rgb(235, 222, 204)' }}
                />
                {formik.touched.type && formik.errors.type ? (
                  <div style={{ color: "red", marginTop: "2px", fontSize: "15px" }}>{formik.errors.type}</div>
                ) : null}
              </div>

              <div className="formInput">
                <b><label className="inputlabel">Address</label></b><br />
                <input className="inputstyle"
                  id="address"
                  type="text"
                 
                  disabled={isButtonDisabled}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ backgroundColor: isButtonDisabled ? 'lightgrey' : 'rgb(235, 222, 204)' }}
                />
                {formik.touched.address && formik.errors.address ? (
                  <div style={{ color: "red", marginTop: "2px", fontSize: "15px" }}>{formik.errors.address}</div>
                ) : null}
              </div>

              <div className="formInput">
                <b><label className="inputlabel">City</label></b><br />
                <input className="inputstyle"
                  id="city"
                  type="text"
                  
                  disabled={isButtonDisabled}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ backgroundColor: isButtonDisabled ? 'lightgrey' : 'rgb(235, 222, 204)' }}
                />
                {formik.touched.city && formik.errors.city ? (
                  <div style={{ color: "red", marginTop: "2px", fontSize: "15px" }}>{formik.errors.city}</div>
                ) : null}
              </div>

              <div className="formInput">
                <b><label className="inputlabel">Country</label></b><br />
                <input className="inputstyle"
                  id="country"
                  type="text"
                  
                  disabled={isButtonDisabled}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ backgroundColor: isButtonDisabled ? 'lightgrey' : 'rgb(235, 222, 204)' }}
                />
                {formik.touched.country && formik.errors.country? (
                  <div style={{ color: "red", marginTop: "2px", fontSize: "15px" }}>{formik.errors.country}</div>
                ) : null}
              </div>

              <div className="formInput">
                <b><label className="inputlabel">Tiime</label></b><br />
                <input className="inputstyle"
                  id="time"
                  type='time'
                  disabled={isButtonDisabled}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ backgroundColor: isButtonDisabled ? 'lightgrey' : 'rgb(235, 222, 204)' }}
                />
                {formik.touched.time && formik.errors.time ? (
                  <div style={{ color: "red", marginTop: "2px", fontSize: "15px" }}>{formik.errors.time}</div>
                ) : null}
              </div>

              <div className="formInput">
                <b><label className="inputlabel">Description</label></b><br />
                <textarea  className="inputstyle"
                  id="description"
                  type="text"
                  
                  disabled={isButtonDisabled}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  style={{ backgroundColor: isButtonDisabled ? 'lightgrey' : 'rgb(235, 222, 204)' ,height:"180px" }}
                />
                {formik.touched.description && formik.errors.description ? (
                  <div style={{ color: "red", marginTop: "2px", fontSize: "15px" }}>{formik.errors.description}</div>
                ) : null}
              </div>

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
            

          

            <div className="formInput">
              <label className="inputlabel">Free/Paid&ensp;</label>
              <select className="inputoption" id="featured" onChange={formik.handleChange} disabled={isButtonDisabled}>
                <option className="inputoption" value={false}>Paid</option>
                <option className="inputoption" value={true}>Free</option>
              </select>
            </div>
           
            <p className="inputlabel" >How many ticket types you want to keep</p>
            <input
              type="number"
              id="numTicketTypes"
              disabled={isButtonDisabled}
              onChange={(e) => { setNumTicketTypes(e.target.value); }}
              min={0}
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

            <div classname="qwert">
              <button className="createtktbtn" type="submit" onClick={formik.handleSubmit}>Move to Create Ticket</button>

            </div>
            {isButtonDisabled &&
              <small>*Event is Created and form is <b>LOCKED</b>  please create Tickets</small>}
          </form>
        </div>
      </div>

      {ticketModal && Array.from({ length: numTicketTypes }).map((_, index) => (
        <NewTicket infoEvent={responseValue} index={index} />
      ))}



    </div>

  );
};

export default NewEvent;







