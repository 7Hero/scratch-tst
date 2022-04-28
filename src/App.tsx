import React, { useEffect } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import NavLayout from "./layouts/NavLayout";
import Login from "./components/Login";
import Profile from "./components/Profile";
import _ from './utils/main';
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./features/userSlice";
_();

const App: React.FC = () => {
  const dispatch = useDispatch()
  const user = useSelector((state: any) => state.user)
  useEffect(()=> {
    if(localStorage.logged){
      dispatch(setUser())
    }
  },[dispatch])

  return (
    <div className="App font-sans sm:bg-white">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<PrivateRoute element={<NavLayout user={user} />} />}>
          {/*@ts-ignore */}
          {user && <Route index element={<Profile user={user} />} />}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
