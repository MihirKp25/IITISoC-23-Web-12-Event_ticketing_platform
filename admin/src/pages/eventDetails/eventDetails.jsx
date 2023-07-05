import "./eventDetails.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable2 from "../../components/datatable/Datatable2"
import Datatable3 from "../../components/datatable/Datatable3"

const eventDetails = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable2/>
        <Datatable3/>
      </div>
    </div>
  )
}

export default eventDetails;