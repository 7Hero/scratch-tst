import React, { useEffect, useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import NavLayout from "./layouts/NavLayout";
import Login from "./components/Login";
import Profile from "./components/Profile";
import _ from './utils/main';
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./features/userSlice";

_();

interface IUser {
  avatar: string;
  id: number;
  first_name: string;
  last_name: string;
  job_title: string;
  followers: string;
  posts: string;
  password: string;
  email: string;
  post_ID: string;
  likes: string;
}


const App: React.FC = () => {
  const dispatch = useDispatch()
  //@ts-ignore
  const user = useSelector(state => state.user)
  useEffect(()=> {
    if(localStorage.logged){
      dispatch(getUser())
    }
  },[])
  return (
    <div className="App font-sans">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<PrivateRoute element={<NavLayout user={user} />} />}>
          {/*@ts-ignore */}
          {user ? <Route index element={<Profile user={user} />} /> : null }
        </Route>
      </Routes>
    </div>
  );
};

export default App;
