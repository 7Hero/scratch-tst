import React, { useEffect, useRef, useState } from "react";
import { DotIcon, HeartIcon } from "../assets";
import { formatNumbers, timeSince } from "../utils/format";
import { userAPI } from "../services/user.service";
import { useSelector } from "react-redux";
import useMediaQuery from "../hooks/useMediaQuery";
import {IUser, IPost} from "../interfaces/global"
type Link = string;



const NumberOf: React.FC<{ nr: number; label: string }> = ({ nr, label }) => {
  return (
    <div>
      <p className="text-center text-xl font-bold">{nr}</p>
      <p className="text-base text-gray-50">{label}</p>
    </div>
  );
};

const RecipeCardMobile: React.FC<{ recipe: IPost; user: IUser }> = ({
  recipe,
  user,
}) => {

  return (
    <div className="animate" style={{ animationDelay: `${recipe.id * 10}ms` }}>
      {/*Time card */}
      <div className="flex p-4 space-x-2">
        <img alt={user.first_name} src={user.avatar} className="h-[32px] rounded-full" />
        <div>
          <p className="text-xs text-black">
            {user.first_name + " " + user.last_name}
          </p>
          <p className="text-xs text-gray-50">{timeSince(recipe.time)}</p>
        </div>
      </div>
      {/* Background image */}
      <img alt='Recipe' src={recipe.image} className="h-44 w-full object-cover" />
      {/* Everthing else */}
      <div className="p-5 profile:px-5 profile:py-0">
        <div className='flex justify-between'> 
        <p className="text-lg font-semibold"> {recipe.title}</p>
        <img src={HeartIcon} alt='like' />
        </div>
        <p className="overflow-hidden line-clamp-2 overflow-ellipsis  profile:text-sm text-gray-70 mt-2.5">
          {" "}
          {recipe.body}{" "}
        </p>
        <div className="flex items-center mt-5 text-sm text-gray-50">
          <span>{Math.round(Math.random() * 100)} Likes</span>
          <img alt='something' src={DotIcon} className="inline" />
          <span> {Math.round(Math.random() * 30)} Comments</span>
          <div className="ml-auto border-[1px] border-green text-green px-[10px] py-1 rounded cursor-pointer">
            Save
          </div>
        </div>
      </div>
    </div>
  );
};

const RecipeCard: React.FC<{ recipe: IPost; user: IUser }> = ({
  recipe,
  user,
}) => {
  const isTablet = useMediaQuery('(max-width:850px)')

  return (
    <div className="animate profile:flex " style={{ animationDelay: `${recipe.id * 10}ms` }}>
      {/*Time card */}
      <div className="flex p-4 space-x-2 profile:hidden">
        <img alt='something' src={user.avatar} className="h-[32px] rounded-full" />
        <div>
          <p className="text-xs text-black">
            {user.first_name + " " + user.last_name}
          </p>
          <p className="text-xs text-gray-50">{timeSince(recipe.time)}</p>
        </div>
      </div>
      {/* Background image */}
      <img alt='something' src={recipe.image} className="h-44 profile:h-[240px] sm:hidden profile:w-60 w-full object-cover" />
      {/* Everthing else */}
      <div className="p-5 profile:px-5 profile:py-0">
      <div className="p-4 profile:px-0 space-x-2 hidden profile:flex">
        <img alt='something' src={user.avatar} className="h-[32px] rounded-full" />
        <div>
          <p className="text-xs text-black">
            {user.first_name + " " + user.last_name}
          </p>
          <p className="text-xs text-gray-50">{timeSince(recipe.time)}</p>
        </div>
      </div>
        <p className="text-lg font-semibold"> {recipe.title}</p>
        <p className="overflow-hidden line-clamp-2 overflow-ellipsis  profile:text-sm text-gray-70" style={{WebkitLineClamp: isTablet ? '4' : '2'}}>
          {" "}
          {recipe.body}{" "}
        </p>
        <div className="flex items-center mt-5 text-sm text-gray-50">
          <span>{Math.round(Math.random() * 100)} Likes</span>
          <img alt='something' src={DotIcon} className="inline" />
          <span> {Math.round(Math.random() * 30)} Comments</span>
          <div className="ml-auto border-[1px] border-green text-green px-[10px] py-1 rounded cursor-pointer">
            Save
          </div>
        </div>
      </div>
    </div>
  );
};
const client = userAPI();

const Profile: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:640px)')
  //@ts-ignore
  const user = useSelector((state) => state.user.user);
  const [posts, setPosts] = useState<IPost[]>([]);
  const ref = useRef(null);
  useEffect(() => {
    if (localStorage.logged) {
      const usr = JSON.parse(localStorage.logged);
      client.getUserPosts(usr.post_ID).then(({ data }) => setPosts(data.posts));
    }
  }, []);

  return (
    <div className="mt-[50px] profile:mt-0 px-24 profile:px-0">
      <div className="flex gap-5 justify-center ">
        <div className="profile:hidden" style={{}}>
          <div
            ref={ref}
            className="w-full bg-white p-6 min-w-max rounded-lg"
          >
            <div className="flex space-x-4 ">
              <img alt='something'
                src={user.avatar}
                width="70px"
                height="70px"
                className="rounded-full h-[70px]"
              />
              <div className="flex flex-col justify-between text-gray-50 text-sm">
                <p className="whitespace-nowrap text-black text-base font-bold">
                  {user.first_name + " " + user.last_name}
                </p>
                <p className="whitespace-nowrap">{user.job_title}</p>
                <p className="text-sm">
                  {formatNumbers(parseInt(user.followers))}k followers
                  <img alt='something' className="inline" src={DotIcon} />
                  {formatNumbers(parseInt(user.likes))}k likes
                </p>
              </div>
            </div>
            <div className="h-[1px] bg-gray-300 my-5"></div>
            <div className="flex justify-between">
              <NumberOf nr={265} label="Recipes" />
              <NumberOf nr={75} label="Saved" />
              <NumberOf nr={248} label="following" />
            </div>
          </div>
        </div>
        {/* Recipes */}
        {/* @ts-ignore */}
        {
        isMobile ? <MobileRecipe posts={posts} user={user} /> : 
        <div
          className="w-full max-w-[600px] profile:min-w-fit min-w-[600px] transition-all duration-500"
          style={{ opacity: posts.length !== 0 ? "1" : "0" }}
        >
          <div className="w-full p-6 bg-white space-y-5 rounded-lg profile:rounded-none transition-all btn-shadow sm:filter-none">
            {posts?.splice(0, 14).map((el) => {
              return <RecipeCard user={user} recipe={el} key={el.id} />;
            })}
          </div>
        </div>
        }
        <div className="min-w-0  w-full max-w-[310px] profile:hidden"></div>
      </div>
    </div>
  );
};

const MobileRecipe = ({posts, user}:{ posts: IPost[], user: IUser }) => {
  return (
    <div
          className="w-full max-w-[600px] profile:min-w-fit min-w-[600px] transition-all duration-500"
          style={{ opacity: posts.length !== 0 ? "1" : "0" }}
        >
          <div className="w-full p-6 bg-white space-y-5 transition-all btn-shadow sm:filter-none">
            {posts?.splice(0, 14).map((el) => {
              return <RecipeCardMobile user={user} recipe={el} key={el.id} />;
            })}
          </div>
        </div>
  )
}
export default Profile;
