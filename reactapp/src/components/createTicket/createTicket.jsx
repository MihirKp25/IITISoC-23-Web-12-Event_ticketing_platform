import './createTicket.css';
import { useContext, useState } from "react";
import { TicketInputs } from "../../formSource";
import { EventInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { AuthContext } from "../../hooks/context/AuthContext";

import { DateRange } from 'react-date-range';
import { format } from "date-fns";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


const NewTicket = ({ infoEvent }) => {
    const location = useLocation();
    console.log(location);
    const [info, setInfo] = useState({});
    const { user } = useContext(AuthContext);
    const [eventId, setEventId] = useState(undefined);

    const { data, loading, error } = useFetch(`/ticket/${infoEvent._id}`);

    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const [ticketDate, setTicketDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);




    const handleClick = async (e) => {
        e.preventDefault();

        try {
            const newTicket = {
                ...info,
                date:ticketDate[0]
            };
            console.log(newTicket);
            //  await axios.post("/event", infoEvent);    
            const response = await axios.post(`/ticket/${infoEvent._id}`, newTicket);
            console.log(response.data);
            console.log(infoEvent._id)
            await axios.post(`/user/event`, { ticketId: response.data._id, userId: user._id, eventId: infoEvent._id });
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <div className="newa">
            <div className="newContainer pop" >
                <div className="top">
                    <h1 className="toptitle"><b>Add Tickets</b></h1>
                </div>

                <div className="righta">
                    <form className='inputform' >

                        {TicketInputs.map((input) => (
                            <div className="formInput" key={input.id}>
                                <b><label className='inputlabel'>{input.label}</label></b><br />
                                <input className='inputstyle'
                                    id={input.id}
                                    onChange={handleChange}
                                    type={input.type}
                                    placeholder={input.placeholder}
                                />
                            </div>
                        ))}

                        {/* <div className="formInput">
                            <label>Choose a event</label>
                            <select
                                id="eventId"
                                onChange={(e) => setEventId(e.target.value)}
                            >
                                {loading
                                    ? "loading"
                                    : data &&
                                    data.map((event) => (
                                        <option key={event._id} value={event._id}>{event.name}</option>
                                    ))}
                            </select>
                        </div> */}

                        <p>{`Ticket Sale Starts ${format(ticketDate[0].startDate, "MM/dd/yyyy")} `} </p>
                        <p>{`Ticket Sale Ends ${format(ticketDate[0].endDate, "MM/dd/yyyy")} `} </p>
                    

                        <DateRange
                            editableDateInputs={true}
                            onChange={item => setTicketDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={ticketDate}
                            minDate={new Date()}
                            />
                            
                        <div style={{ display: 'flex', textAlign: "center", alignItems: "center" }}>
                            <button className="createtktbtn" onClick={handleClick}>Create Tickets</button>
                        </div>
                    </form>
                </div>
            </div>



        </div>

    );
};

export default NewTicket;