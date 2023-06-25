
import useFetch from '../../hooks/useFetch';
import a from '../images/cntr1.jpg';
import b from '../images/cntr2.jpg';
import c from '../images/cntr3.jpeg';
import d from '../images/cntr4.jpg';
import e from '../images/cntr5.jpg';
import f from '../images/cntr6.jpeg';


export default function Upcoming() {

  const { data, loading, error } = useFetch("/event/countbycountries?country=India,Sweden,United States,Russia,Australia,Japan")
  console.log(data);

  return (
    <div className="contthreecontainer idli">
      <div className="contthreebox"><a href="#"><img src={a} className="contthreeboximg" style={{ marginTop:'10px',width: '189px', borderRadius: '10px', transition: '0.5s' }}></img></a>
        <h5 style={{fontSize:'11px'}}> {data[0]}+ events</h5><b style={{fontSize:'15px'}}>India</b></div>
      <div className="contthreebox"><a href="#"><img src={b} className="contthreeboximg" style={{ marginTop:'10px',width: '189px', borderRadius: '10px', transition: '0.5s' }}></img></a>
        <h5 style={{fontSize:'11px'}}> {data[1]}+ events</h5><b style={{fontSize:'15px'}}>Sweden</b></div>
      <div className="contthreebox"><a href="#"><img src={c} className="contthreeboximg" style={{ marginTop:'10px',width: '189px', borderRadius: '10px', transition: '0.5s' }}></img></a>
        <h5 style={{fontSize:'11px'}}> {data[2]}+ events</h5><b style={{fontSize:'15px'}}>Uniteb States</b></div>
      <div className="contthreebox"><a href="#"><img src={d} className="contthreeboximg" style={{ marginTop:'10px',width: '189px', borderRadius: '10px', transition: '0.5s' }}></img></a>
        <h5 style={{fontSize:'11px'}}> {data[3]}+ events</h5><b style={{fontSize:'15px'}}>Russia</b></div>
      <div className="contthreebox"><a href="#"><img src={e} className="contthreeboximg" style={{ marginTop:'10px',width: '189px', borderRadius: '10px', transition: '0.5s' }}></img></a>
        <h5 style={{fontSize:'11px'}}> {data[4]}+ events</h5><b style={{fontSize:'15px'}}>Australia</b></div>
      <div className="contthreebox"><a href="#"><img src={f} className="contthreeboximg" style={{ marginTop:'10px',width: '189px', borderRadius: '10px', transition: '0.5s' }}></img></a>
        <h5 style={{fontSize:'11px'}}>{data[5]}+ events</h5><b style={{fontSize:'15px'}}>Japan</b></div>
    </div>
  )



}