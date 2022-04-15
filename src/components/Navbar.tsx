import React from "react";
import Logo from "../logo.svg";
import Search from "../assets/search.svg";
import { MessageIcon, RecipeIcon } from "../assets";

interface IProps {
  user: any;
}
const Navbar: React.FC<IProps> = () => {

  const user = JSON.parse(localStorage.logged)
  
  return (
    <div className="h-20 bg-white flex px-24 md:px-6 items-center z-100 md:border-b-[1px] md:border-b-gray-300">
      <div className="w-[20%]">
        <div className="max-w-[460px] w-full hidden md:flex scale-110 origin-top-left">
          <img src={Search} />{" "}
        </div>
        <img src={Logo} className='md:hidden' />
        <div className="flex justify-center border-b border-gray-200 max-w-[460px] w-full md:hidden">
          <img src={Search} />{" "}
          <input
            placeholder="Search Recipe, Profile, or Ingridients"
            className="border-hidden"
          ></input>
        </div>
      </div>
      {/* Search bar */}
      <div className="w-[60%] flex justify-center px-4">
        <img src={Logo} className='hidden md:block' />
        <div className="flex justify-center border-b border-gray-200 max-w-[460px] w-full md:hidden">
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
