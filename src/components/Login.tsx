import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import AuthLayout from "../layouts/AuthLayout";
import Image from "../assets/authbg.svg";
import Logo from "../logo.svg";
import Button from "./base/Button";
import { getUser } from "../features/userSlice";
import AuthService from "../services/auth.service";
import { Error } from "../interfaces/global";

const client = new AuthService();

const leftPanelStyle = {
  width: "100%",
  maxWidth: "425px",
  height: "570px",
  backgroundColor: "white",
  backgroundImage: `linear-gradient(to top,#FFF, rgba(117, 19, 93, 0)),url(${Image})`,
  backgroundPosition: "top right",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  justifyContent: "center",
  alignItems: "center",
};

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<Error>({ error: false, style: {} });

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };
  const dispatch = useDispatch();
  const handleSubmit = (): void => {
    client.login(email, password).then((msg) => {
      if (msg.error) {
        setError({ error: true, style: { color: "red", borderColor: "red" } });
      } else {
        localStorage.logged = JSON.stringify(msg.data);
        dispatch(getUser());
        navigate("/profile");
      }
    });
  };

  return (
    <AuthLayout>
      <div className="h-screen flex font-sans md:flex-col sm:overflow-hidden">
        <img
          src={Logo}
          className="md:mx-auto sm:mr-auto sm:ml-8 hidden md:block mt-[80px] sm:hidden"
          alt="logo"
        />
        <p className="text-2xl font-bold hidden md:block mx-auto mt-[40px] sm:ml-8 sm:hidden">
          Welcome Back!
        </p>
        <div className="my-auto md:mt-[36px] flex w-full justify-center">
          {/* Left Panel */}
          <div style={leftPanelStyle} className="md:hidden flex">
            <img src={Logo} className="scale-150" alt="logo" />
          </div>
          {/* Right Panel */}{" "}
          <div className="w-[425px] min-w-[300px] bg-white p-16 sm:p-8">
            <p className="text-2xl font-bold md:hidden">Welcome Back!</p>
            <p className="text-sm  text-gray-100 mb-[60px]">
              Please login to continue.
            </p>

            <p
              style={{ display: !error.error ? "none" : "", color: "red" }}
              className="absolute -translate-y-7"
            >
              {" "}
              Incorrect Email or Password.
            </p>
            <div
              className="flex flex-col transition-all duration-200 space-y-8"
              style={error.style}
            >
              <div>
                <p style={error.style} className="text-sm text-gray-100">
                  Email
                </p>
                <input
                  type="text"
                  value={email}
                  onChange={handleEmail}
                  style={error.style}
                />
              </div>
              <div>
                <p style={error.style} className="text-sm text-gray-100">
                  Password
                </p>
                <input
                  type="password"
                  value={password}
                  onChange={handlePassword}
                  className="mb-5"
                  style={error.style}
                />
              </div>
              <Button
                text="Login"
                cstyle="green"
                onClick={handleSubmit}
                style={{
                  maxWidth: "100%",
                  filter: "drop-shadow(0px 6px 20px rgba(13, 51, 32, 0.1))",
                }}
              />
              <div className="flex flex-col items-center">
                <p className="text-sm  text-gray-100">New to scratch?</p>
                <p className="text-green text-base font-bold">
                  {" "}
                  Create account here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
