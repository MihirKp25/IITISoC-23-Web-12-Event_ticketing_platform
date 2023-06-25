
import { useState } from "react";
import { TicketInputs } from "../../formSource";
import { EventInputs } from "../../formSource";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const NewTicket = ({infoEvent}) => {
    const location=useLocation();
    console.log(location);
    const [info, setInfo] = useState({});
    const [eventId, setEventId] = useState(undefined);

    const { data, loading, error } = useFetch(`/ticket/${infoEvent._id}`);

    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };


    const handleClick = async (e) => {
        e.preventDefault();
        
        try {
            const newTicket = {
                ...info
              };
              console.log(newTicket);
        //  await axios.post("/event", infoEvent);    
          await axios.post(`/ticket/${infoEvent._id}`, newTicket);
        } catch (err) {
          console.log(err);
        }
      };


    return (
        <div className="new">


            <div className="newContainer" style={{marginLeft:100}}>
                <div className="top">
                    <h1>Add Tickets</h1>
                </div>

                <div className="right">
                    <form>

                        {TicketInputs.map((input) => (
                            <div className="formInput" key={input.id}>
                                <label>{input.label}</label>
                                <input
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

                        <button onClick={handleClick}>Create Tickets</button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default NewTicket;