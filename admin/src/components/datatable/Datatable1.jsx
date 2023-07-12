import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";




const Datatable1 = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState();
  const [user, setUser] = useState([]);
  const { data, loading, error } = useFetch(`http://localhost:3000/${path}`);

  useEffect(() => {
    setList(data);
  }, [data]);

  const navigate = useNavigate();
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/${path}/${id}`);
      setList(list.filter((item) => item._id !== id));
    } catch (err) {}
  };
  const handleClick = async (id) => {
    try{
      navigate(`/user/${id}`);}
      catch(err){
        console.log(err);
      }
  };

  
/*
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get('http://localhost:3000/user/:id');
      setUser(response.data);
    } catch (error) {
       console.log(error);
    }
  };
*/
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            
              <div className="viewButton" onClick={ ()=>handleClick(params.row._id)}>View</div>
           
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
         User
        <Link to="/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={row=>row._id}
      />
    </div>
  );
};

export default Datatable1;
