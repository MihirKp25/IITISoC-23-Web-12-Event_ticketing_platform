import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { BookedeventColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import { useState, useEffect } from "react";
import { AuthContext } from "../../context/Authcontext";
import { useParams } from "react-router-dom";
import axios from "axios";
import { setAuthToken } from "../../hook/auth";

const Datatable2 = () => {
  
  const [list, setList] = useState();

  const { userId } = useParams();
  //console.log(userId);

  const token = localStorage.getItem('jwtToken');
  setAuthToken(token);
  const { data, loading, error , reFetch} = useFetch(`http://localhost:3000/user/admin/events/booked/${userId}`);
 // console.log(data);
   const data1=[];
  
  // Loop through the eventData array to access the _id of each event
   for (const event of data) {
    data1.push(event.eventId);
   
 
    }
 
   // console.log(data1)
  
 // const eventId = data.eventId[1]._id;
 // console.log(eventId);
/*    useEffect( async()=>{
      const  data1 = await axios.get(`http://localhost:3000/event/find/${eventId}`);
      console.log(data1);
    })*/
  
  useEffect(() => {
    setList(data1);
  }, [data1]);



  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('jwtToken');
      setAuthToken(token);
      await axios.delete(`http://localhost:3000/event/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (err) {}
  };


  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
         Booked Event
      </div>
      <DataGrid
        className="datagrid"
        rows={data1}
        columns={BookedeventColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={row=>row._id}
      />
    </div>
  );
};

export default Datatable2;