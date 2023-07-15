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
  { field: "id", headerName: "ID", width: 70 },
   
  {
    field: "userId",
    headerName: "UserId",
    width: 230,
  },
  {
    field: "eventId",
    headerName: "EventId",
    width: 230,
  },
  {
    field: "ticketId",
    headerName: "TicketId",
    width: 200,
  },
  {
    field: "purchaseDate",
    headerName: "Date",
    width: 230,
  },


 
];
export const CreatedeventColumns = [
  { field: "id", headerName: "ID", width: 70 },
   
  {
    field: "userId",
    headerName: "UserId",
    width: 230,
  },
  {
    field: "eventId",
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

