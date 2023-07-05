export default function TicketDetails({ticketinfo}){

console.log(ticketinfo)
return (<>
          
         {/* make a space for qr code */}
         <p>Event name{ticketinfo.eventId.name}</p>
         <p>event type{ticketinfo.eventId.type}</p>
         <p>event date{ticketinfo.eventId.date}</p>

         <p>event venue {ticketinfo.eventId.address} {ticketinfo.eventId.city} {ticketinfo.eventId.country}</p>
         <p>ticket name{ticketinfo.ticketId.name}</p>
         <p>ticket purchase date{ticketinfo.purchaseDate}</p>
         <p>no of tickets{ticketinfo.quantity}</p>
         <p>Total Amount paid ${ticketinfo.quantity*ticketinfo.ticketId.price}</p>
            

</>)

}