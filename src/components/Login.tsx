import AuthLayout from "../layouts/AuthLayout";
import Image from "../assets/authbg.svg";
import Logo from "../logo.svg";
import React, { useState } from "react";
import Button from "./base/Button";
import { useNavigate } from "react-router-dom";
const leftPanelStyle: React.CSSProperties = {
  width:'100%',
  maxWidth:'456px',
  height: "570px",
  backgroundColor:'white',
  backgroundImage: `linear-gradient(to top,#FFF, rgba(117, 19, 93, 0)),url(${Image})`,
  backgroundPosition: "top right",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
};

const inputStyle: React.CSSProperties = {
  padding:'10px 10px 10px 5px',
  display:'block',
  width:'100%',
  border:'none',
  borderBottom:'1px solid #757575'
}
const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  }
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  }
  const handleSubmit = (e: React.ChangeEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    console.log(e);
  }

  return (
    <AuthLayout>
    <div className="h-screen flex">
      <div className='my-auto flex w-full justify-center'>

      {/* Left Panel */}
      <div style={leftPanelStyle}>
        <img src={Logo} className="scale-150" />
      </div>
      {/* Right Panel */} <div className="w-[456px] min-w-[456px] bg-white p-16">
        <p>
          Welcome Back!
        </p>
        <p>
          Please login to continue.
        </p>
        <div className='flex flex-col'>
            <p>Email</p>
            <input type='text' value={email} onChange={handleEmail}/>
            <p>Password</p>
            <input type='password' value={password} onChange={handlePassword} className='mb-5' />
            <Button text="Login" cstyle='green' onClick={() => navigate('/login')} style={{maxWidth:'100%'}}/>
        </div>
      </div>
    </div>
    </div>
    </AuthLayout>
  );
};

{
  /* <div className='my-auto'>
        <div className='flex'>
            {/* Left Panel */
}
// <div style={leftPanelStyle}>
//   <img src={Logo} className='scale-150' />
// </div>
{
  /* Right Panel */
}
//             <div className='w-[570px]'>

//             </div>
//         </div>
// </div> }
export default Login;
