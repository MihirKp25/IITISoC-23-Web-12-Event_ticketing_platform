import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMapLocationDot, faArrowTrendUp, faBed, faCalendarDays, faList, faLocationDot, faUserGraduate, faMasksTheater, faHeartPulse, faGamepad, faMusic, faChildren,faPerson, faClock, faLanguage, faPeopleArrows, faTags, faClockRotateLeft, faBookmark, faBook, faLocation, faTag} from '@fortawesome/free-solid-svg-icons';
import './Modal.css';
import a from '../../components/images/cntr4.jpg';
import useFetch from "../../hooks/useFetch"
import axios from "axios";
import { AuthContext } from '../../hooks/context/AuthContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TicketBook from '../../components/ticketbBook/TicketBook';


export default function Modal({closeModal,eventId,ticketDet}) {
  const [loading, setLoading] = useState(false);
  const [orderAmount, setOrderAmount] = useState(0);
  const {user}=useContext(AuthContext);
  const [openOptions, setOpenOptions] = useState(false);
  const [option, setOption] = useState({
    tickets:1
  });
  const {data}=useFetch(`http://localhost:3000/event/ticket/${eventId}`)
console.log(data);
  const handleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };
  console.log(option)
  console.log(ticketDet)

  




const handleClick=async (orderId)=>{
  
  try {
    const purchase= await axios.post(`http://localhost:3000/ticket/purchase/${eventId}/${ticketDet._id}`,{eventId:eventId,ticketId:ticketDet._id,ticket:option.tickets,userId:user._id,orderId:orderId});   //NOTE TO INCLUDE USER DATEILS HERE AFTER COMPLETION 
    toast.success('Tickets Booked Succesfully ..Please check your registered Email for more details', {
      position: toast.POSITION.TOP_CENTER
    });
   console.log(purchase.data._id)
    await axios.post("http://localhost:3000/event/sendconfirmation",{userId:user._id,purchaseId:purchase.data._id})

    closeModal(false);
      
  }
 catch(err){
    console.log(err);
 }
}


const loadRazorpay=()=> {
  const script = document.createElement('script');
  script.src = 'https://checkout.razorpay.com/v1/checkout.js';
  script.onerror = () => {
    alert('Razorpay SDK failed to load. Are you online?');
   
  };
  script.onload = async () => {
    try {
      setOrderAmount(option.tickets*ticketDet.price)
      setLoading(true);
      const result = await axios.post('http://localhost:3000/create-order', {
        amount: orderAmount ,
      });
      const { amount, id: order_id, currency } = result.data;
      const {
        data: { key: razorpayKey },
      } = await axios.get('http://localhost:3000/get-razorpay-key');

      const options = {
        key: razorpayKey,
        amount: amount.toString(),
        currency: currency,
        name: 'example name',
        description: 'example transaction',
        order_id: order_id,
        handler: async function (response) {
          const result = await axios.post('http://localhost:3000/pay-order', {
            amount: amount,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          });
          alert(result.data.msg);
          if(result.data.success){
            handleClick(result.data.orderId);
          }
          // fetchOrders();
        },
        prefill: {
          name: 'example name',
          email: 'email@example.com',
          contact: '111111',
        },
        notes: {
          address: 'example address',
        },
        theme: {
          color: '#80c0f0',
        },
      };

      setLoading(false);
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
      console.log(paymentObject)
      

     


    } catch (err) {
      alert(err);
      setLoading(false);
    }
  };
  document.body.appendChild(script);
}







  return (
   
    <div className="modalBackground">
       
      {/* <span onClick={closeModal(false)}>Close</span> */}
      <div className="modalContainer">
        <div className="title" style={{ fontWeight:'400', fontSize:'30px'}}>CONFIRM TICKET BOOKING </div>
        <span className="container">
         
          <span className="details"><b>Details:</b><small>  {ticketDet.totalTickets} Tickets Remaining</small></span><br/>
          <FontAwesomeIcon icon = {faBookmark}></FontAwesomeIcon>
          <span className="modalchildtitle"><b> NAME:</b></span>
            <span className="childinfo">&ensp;{ticketDet?.name}</span><br/>
          <FontAwesomeIcon icon = {faLocationDot}></FontAwesomeIcon>
          <span className="modalchildtitle"><b> CATEGORY:</b></span>
            <span className="childinfo">&ensp;{ticketDet?.type}</span><br/>
            <FontAwesomeIcon icon = {faLanguage}></FontAwesomeIcon>
          <span className="modalchildtitle"><b> DESCRIPTION:</b></span>
            <span className="childinfo">&ensp;{ticketDet?.desc}</span><br/>
          <FontAwesomeIcon icon = {faClock}></FontAwesomeIcon>
          <span className="modalchildtitle"><b> PRICE <small>per Ticket</small> :</b></span>
            <span className="childinfo">&ensp;<b> $ {ticketDet?.price}</b></span><br/>
          <FontAwesomeIcon icon = {faPeopleArrows}></FontAwesomeIcon>
          <span className="modalchildtitle"><b> TICKET SALE ENDS:</b></span>
            <span className="childinfo">&ensp;RUKO zara sabar karo</span><br/><br/>
          <FontAwesomeIcon icon = {faTags}></FontAwesomeIcon>
          <span className="modalchildtitle"><b>SELECT NUMBER OF TICKETS:</b></span>
          
            
        </span>
        <ToastContainer/>
        <div className="imlidli" style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'10px'}}>
        <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${option.tickets} tickets`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <div className="optionCounter">
                        <button
                          disabled={option.tickets <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("tickets", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {option.tickets}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("tickets", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    
                  </div>
                )}
              </div>
              <span className="modalchildtitle"><b>AMOUNT TO PAY : $ {option.tickets*ticketDet.price}</b>
         </span>
              
        </div>
        <button className="openModalBtun" onClick={loadRazorpay}>CONFIRM BOOKING</button>
         
         <button className="openModalBtun" onClick={()=>closeModal(false)}>Cancel</button>
      </div>
    </div>
  )
}