import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import NavLayout from "./layouts/NavLayout";
import Login from "./components/Login";
import Profile from "./components/Profile";
import _ from './utils/main'

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<PrivateRoute element={<NavLayout />} />}>
          <Route index element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
