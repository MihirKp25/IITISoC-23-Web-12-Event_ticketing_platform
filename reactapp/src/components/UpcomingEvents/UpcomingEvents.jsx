import './UpcomingEvents.css'
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
      <div className="contthreebox"><a href="#"><img src={a} className="contthreeboximg" ></img></a>
        <h5 className="cthrevecou"> {data[0]}+ events</h5><b className='countryname' >India</b></div>
      <div className="contthreebox"><a href="#"><img src={b} className="contthreeboximg" ></img></a>
        <h5 className="cthrevecou"> {data[1]}+ events</h5><b className='countryname' >Sweden</b></div>
      <div className="contthreebox"><a href="#"><img src={c} className="contthreeboximg" ></img></a>
        <h5 className="cthrevecou"> {data[2]}+ events</h5><b className='countryname' >Uniteb States</b></div>
      <div className="contthreebox"><a href="#"><img src={d} className="contthreeboximg" ></img></a>
        <h5 className="cthrevecou"> {data[3]}+ events</h5><b className='countryname' >Russia</b></div>
      <div className="contthreebox"><a href="#"><img src={e} className="contthreeboximg" ></img></a>
        <h5 className="cthrevecou"> {data[4]}+ events</h5><b className='countryname' >Australia</b></div>
      <div className="contthreebox"><a href="#"><img src={f} className="contthreeboximg" ></img></a>
        <h5 className="cthrevecou">{data[5]}+ events</h5><b className='countryname' >Japan</b></div>
    </div>
  )



}