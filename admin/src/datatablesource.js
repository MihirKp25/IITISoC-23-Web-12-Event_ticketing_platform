export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}  alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
 
];
export const eventColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "event",
    headerName: "Event",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },
  {
    field: "type",
    headerName: "Type",
    width: 230,
  },
  {
    field: "address",
    headerName: "Address",
    width: 230,
  },

  {
    field: "date",
    headerName: "Date",
    width: 100,
  },
 
];

