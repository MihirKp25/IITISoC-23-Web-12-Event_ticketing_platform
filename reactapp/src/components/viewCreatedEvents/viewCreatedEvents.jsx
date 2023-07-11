import { useContext } from "react";
import { AuthContext } from "../../hooks/context/AuthContext";
import useFetch from "../../hooks/useFetch";

export default function ViewCreatedEvents(){

const {user}=useContext(AuthContext);
const {data,loading,error}=useFetch(`http://localhost:3000/user/events/${user._id}`);

console.log(data);

return(
<>
      <ul>
      {data.map((event)=>(
        <li>{event._id}</li>
  ))}



      </ul>


</>
)



}