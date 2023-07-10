export default function Payment(){

return(<>

PAYMENT

{/* <a href="upi://pay?pa=18pranavk@ybl&pn=Pranav&am=2">
  <img src="https://dummyimage.com/300x300/000000/ffffff&text=Sample+QR+Code" alt="UPI QR Code"/>
</a> */}

<form action="upi://pay" method="POST">
  <input type="hidden" name="pa" value="18pranavk@tbl"/>
  <input type="hidden" name="pn" value="John Doe"/>
  <input type="hidden" name="am" value="1.00"/>
  <input type="submit" value="Proceed to UPI Payment"/>
</form>




</>)





}