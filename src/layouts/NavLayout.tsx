import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

interface IProps {
  user: any;
}
const NavLayout: React.FC<IProps> = ({user}) => {

  return (
    <div className='profile:bg-white bg-[#F7F8FA]' style={{height:'100vh'}}>
      <Navbar />
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default NavLayout