import Image from "../assets/loginbg.png";
import ImageTablet from "../assets/bg-tablet.png";
import Logo from "../logo.svg";
import { useEffect } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

const containerStyle: React.CSSProperties = {
  height: "100vh",
  width: "100vw",
  backgroundPosition: "top right",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

interface IProps {
  children: JSX.Element;
}

const AuthLayout: React.FC<IProps> = ({ children }) => {
  const isTablet = useMediaQuery("(max-width:770px)");
  const isMobile = useMediaQuery("(max-width:540px)");
  return (
    <div
      style={{
        ...containerStyle,
        backgroundImage: isMobile
          ? ""
          : isTablet
          ? `linear-gradient(to top,#FFF, rgba(117, 19, 93, 0)),url(${ImageTablet})`
          : `linear-gradient(to top,#FFF, rgba(117, 19, 93, 0)),url(${Image})`,
      }}
      className="bg-gradient-to-t from-white to-transparent font-sans"
    >
      <div className='hidden sm:block'>
        <div
          style={{
            backgroundImage: `url(${Image})`,
            backgroundSize: "cover",
            width: "100%",
            paddingTop: "63%",
          }}
          className="rounded-br-[110px]"
        ></div>
        <div className="absolute top-[80px]">
          <img src={Logo} className="sm:ml-8 hidden sm:block" />
          <p className="text-2xl font-bold hidden md:block mx-auto sm:mr-auto sm:ml-8 mt-[30px]">
            Welcome Back!
          </p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
