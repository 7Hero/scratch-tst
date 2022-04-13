import React from "react";
import Logo from "../logo.svg";
import Search from "../assets/search.svg";
import { MessageIcon, RecipeIcon } from "../assets";

interface IProps {
  user: any;
}
const Navbar: React.FC<IProps> = ({user}) => {
  
  return (
    <div className="h-20 bg-white flex px-24 items-center">
      <div className="w-[20%]">
        <img src={Logo} />
      </div>
      {/* Search bar */}
      <div className="w-[60%] flex justify-center px-4">
        <div className="flex justify-center border-b border-gray-200 max-w-[460px] w-full">
          <img src={Search} />{" "}
          <input
            placeholder="Search Recipe, Profile, or Ingridients"
            className="border-hidden"
          ></input>
        </div>
      </div>
      <div className="w-[20%] flex justify-end gap-4">
          <img src={MessageIcon} />
          <img src={RecipeIcon} />
          <img className='rounded-[50px] w-9 h-9' src={user.avatar} />
      </div>
    </div>
  );
};

export default Navbar;
