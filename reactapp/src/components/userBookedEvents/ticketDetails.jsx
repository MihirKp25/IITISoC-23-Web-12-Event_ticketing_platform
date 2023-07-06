export default function TicketDetails( {ticketinfo}){


return (<>
         {/* make a space for qr code */}
         <span><b>Event name: </b>{ticketinfo.eventId.name}</span><br/>
         <span><b>Event type: </b>{ticketinfo.eventId.type}</span><br/>
         <span><b>Event date:</b> {ticketinfo.eventId.date}</span><br/>
         <span><b>Event venue:</b> {ticketinfo.eventId.address}  {ticketinfo.eventId.city}  {ticketinfo.eventId.country}</span><br/>
         <span><b>Ticket name:</b> {ticketinfo.ticketId.name}</span><br/>
         <span><b>Ticket purchase date:</b> {ticketinfo.purchaseDate}</span><br/>
         <span><b>No of tickets: </b>{ticketinfo.quantity}</span><br/>
         <span><b>Total amount paid: </b>$ {ticketinfo.quantity*ticketinfo.ticketId.price}</span><br/>
            








</>)

}