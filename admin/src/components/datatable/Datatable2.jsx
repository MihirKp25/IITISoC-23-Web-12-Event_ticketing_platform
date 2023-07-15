import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { BookedeventColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import { useState, useEffect } from "react";
import { AuthContext } from "../../context/Authcontext";
import { useParams } from "react-router-dom";
import axios from "axios";

const Datatable2 = () => {
  
  const [list, setList] = useState();

  const { userId } = useParams();
  console.log(userId);


  const { data, loading, error , reFetch} = useFetch(`http://localhost:3000/user/events/booked/${userId}`);
  console.log(data);
  
  
  useEffect(() => {
    setList(data);
  }, [data]);



  const handleDelete = async (id) => {
    try {
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
        rows={data}
        columns={BookedeventColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={row=>row._id}
      />
    </div>
  );
};

export default Datatable2;