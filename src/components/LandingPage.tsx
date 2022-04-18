import logo from "../logo.svg";
import Image from "../Image.png";
import { useNavigate } from "react-router-dom";
import Button from "./base/Button";

const containerStyle: React.CSSProperties = {
  backgroundImage: `url(${Image})`,
  height: "100vh",
  backgroundPosition: "top right",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  overflow: "hidden",
};


const LandingPage: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div style={containerStyle}>
      <div className="md:mx-4 md:text-center mx-24 mt-20">
        {/* Logo */}
        <img src={logo} className='md:m-auto' alt='logo'/>
        {/* Text*/}
        <div className="mt-24 max-w-[505px] font-sans md:mx-auto">
          <p className="font-semibold text-4xl text-black flex">
            Join over 50 millions people sharing recipes everyday
          </p>
          <p className="text-sm text-gray-100 text-left mt-[8px]">
            Never run out of ideas again. Try new foods, ingredients, cooking
            style, and more
          </p>
          <div className="flex space-x-5 mt-[40px]">
            <Button text="Join Scratch" cstyle='green' onClick={() => navigate('/login')} />
            <Button text="Learn More" onClick={() => navigate('/login')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
