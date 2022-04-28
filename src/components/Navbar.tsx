import React from "react";
import Logo from "../logo.svg";
import Search from "../assets/search.svg";
import { MessageIcon, RecipeIcon } from "../assets";
import useMediaQuery from "../hooks/useMediaQuery";
import {useSelector} from "react-redux";


const Navbar: React.FC = () => {

  const isMobile = useMediaQuery('(max-width:540px)');
  const user = useSelector((state: any) => state.user.data);

  return (
    <>
      {isMobile ? <NavbarMobile/> : 
      <div className="h-20 bg-white flex px-24 md:px-6 items-center z-100 md:border-b-[1px] md:border-b-gray-300">
      <div className="w-[20%]">
        <div className="max-w-[460px] w-full hidden md:flex scale-110 origin-top-left">
          <img src={Search} alt='Search Icon' />{" "}
        </div>
        <img src={Logo} className='md:hidden' alt='logo' />
      </div>
      {/* Search bar */}
      <div className="w-[60%] flex justify-center px-4">
        <img src={Logo} className='hidden md:block' alt='logo' />
        <div className="flex justify-center border-b border-gray-200 max-w-[460px] w-full md:hidden">
          <img src={Search} alt='lgo' />{" "}
          <input
            placeholder="Search Recipe, Profile, or Ingridients"
            className="border-hidden"
          ></input>
        </div>
      </div>
      <div className="w-[20%] flex justify-end gap-4">
          <img src={MessageIcon} alt='Messages' />
          <img src={RecipeIcon} alt='Recipes' />
          <img className='rounded-[50px] w-9 h-9' src={user.avatar} alt={user.first_name} />
      </div>
    </div>}   
    </>
  );
};

const NavbarMobile = () => {
 return (
   <div className='flex w-full justify-between box-border px-7 py-4 bg-white'>
        <img src={Logo} className='hidden md:block' alt="logo"/>
        <div className='flex gap-6' >
        <img src={MessageIcon} alt='Messages' />
          <img src={RecipeIcon}  alt='Recipes' />
        </div>
   </div>
 )
}
export default Navbar;
