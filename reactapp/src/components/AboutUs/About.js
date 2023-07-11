import "./About.css";
import Navbar from "../navbar/Navbar";
import img from "../images/bk.png"
import img1 from '../images/sd.png';
import img2 from '../images/PY.webp';
const AboutUs = () => {
    return (
        <>
        
        <Navbar/>
            <div className="container " id='Align'  >
            <h1>ABOUT US</h1>

        <div className="wrapper">
<p>Lorem ipsum dolor sit amet. A reiciendis sequi in consequatur inventore non molestiae dolores aut enim quibusdam quo cumque ullam. Quo provident aliquam est nemo quaerat vel illum nobis sed Quis eveniet in rerum odit? Non numquam adipisci et fuga distinctio ut reprehenderit galisum 33 delectus dicta.  </p>
<div className="shift">
    <h1>WHAT MAKES US DIFFERNT? </h1>
<div className="row">
    <div className="col row mx-0">
    <article class="card1" >
    <div class="temporary_text">
      <img src={img} height="95px"  width="70px"/>
   </div>
<div class="card_content">
    <h5 class="card_title">EASY BOOKING</h5>
        <span class="card_subtitle">Thsi is a subtitle of this page. Let us see how it looks on the Web.</span>
        <p class="card_description">Lorem ipsum dolor, sit amet  expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>
    
</div>
</article>
</div>
<div className="col row mx-0">
<article class="card1"  >
    <div class="temporary_text">
      <img src={img1} height="95px"  width="80px"/>
    </div>
<div class="card_content">
    <h5 class="card_title">FAST CREATE</h5>
        <span class="card_subtitle">Thsi is a subtitle of this page. Let us see how it looks on the Web.</span>
        <p class="card_description">Lorem ipsum dolor, sit amet  expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>
    
</div>
</article>
</div>
<div className="col row mx-0">
<article class="card1">
    <div class="temporary_text">
      <img src={img2} height="95px"  width="85px"/>
    </div>
<div class="card_content">
    <h5 class="card_title">EASY PAYMENTS</h5>
        <span class="card_subtitle">Thsi is a subtitle of this page. Let us see how it looks on the Web.</span>
        <p class="card_description">Lorem ipsum dolor, sit amet  expedita exercitationem recusandae aut dolor tempora aperiam itaque possimus at, cupiditate earum, quae repudiandae aspernatur? Labore minus soluta consequatur placeat.</p>
    
</div>
</article>
</div>
</div>
</div>
       </div>
       </div>
       
       </>
      );

    }
export default AboutUs;