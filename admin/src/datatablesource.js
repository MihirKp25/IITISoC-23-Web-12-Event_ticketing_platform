export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.image || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}  alt="avatar" />
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
    field: "contactNo",
    headerName: "Phone",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
 
];
export const BookedeventColumns = [
  
   
  {
    field: "name",
    headerName: "Name",
    width: 200,
  },
  {
    field: "type",
    headerName: "Event type",
    width: 200,
  },
  {
    field: "city",
    headerName: "City",
    width: 200,
  },
  {
    field: "country",
    headerName: "Country",
    width: 200,
  },
  {
    field: "endDate",
    headerName: "EndDate",
    width: 200,
  },


 
];


export const CreatedeventColumns = [
 
   
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },
  {
    field: "tickettitle",
    headerName: "EventId",
    width: 230,
  },
  {
    field: "ticketId",
    headerName: "TicketId",
    width: 200,
  },
  {
    field: "soldDate",
    headerName: "Date",
    width: 230,
  },


 
];

