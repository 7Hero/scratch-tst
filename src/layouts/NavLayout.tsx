import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

interface IProps {
  user: any;
}
const NavLayout: React.FC<IProps> = ({user}) => {


  return (
    <div style={{backgroundColor:'#F7F8FA', height:'100vh'}}>
      <Navbar user={user} />
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default NavLayout