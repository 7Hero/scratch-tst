import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const NavLayout = () => {


  return (
    <div style={{backgroundColor:'#F7F8FA', height:'100vh'}}>
      <Navbar/>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default NavLayout