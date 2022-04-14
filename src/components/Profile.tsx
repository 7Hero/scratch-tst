import React, { useEffect, useRef, useState } from "react";
import { DotIcon } from "../assets";
import { formatNumbers, timeSince } from "../utils/format";
import { userAPI } from "../services/user.service";
import { useSelector } from "react-redux";
type Link = string;
interface IProps {
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
interface Post {
  id: number;
  title: string;
  body: string;
  time: number;
  image: Link;
}

const NumberOf: React.FC<{ nr: number; label: string }> = ({ nr, label }) => {
  return (
    <div>
      <p className="text-center text-xl font-bold">{nr}</p>
      <p className="text-base text-gray-50">{label}</p>
    </div>
  );
};

const RecipeCard: React.FC<{recipe: Post, user: IProps }> = ({ recipe, user, }) => {
  return (
    <div className='animate' style={{animationDelay:`${(recipe.id*100)-1200}ms`}}>
      {/*Time card */}
      <div className="flex p-4 space-x-2">
        <img src={user.avatar} className="h-[32px] rounded-full" />
        <div>
          <p className="text-xs text-black">
            {user.first_name + " " + user.last_name}
          </p>
          <p className="text-xs text-gray-50">{timeSince(recipe.time)}</p>
        </div>
      </div>
      {/* Background image */}
      <img src={recipe.image} className='h-44 w-full object-cover' />
      {/* Everthing else */}
      <div className='p-5 '>
        <p className='text-lg font-semibold'> {recipe.title }</p>
        <p className='line-clamp-2 overflow-hidden overflow-ellipsis text-gray-70'> {recipe.body} </p>
        <div className='flex items-center mt-5 text-sm text-gray-50'>
          <span>{Math.round(Math.random()*100)} Likes</span><img src={DotIcon} className='inline' /><span> {Math.round(Math.random()*30)} Comments</span>
          <div className='ml-auto border-[1px] border-green text-green px-[10px] py-1 rounded cursor-pointer'>
            Save
          </div>
        </div>
      </div>
    </div>
  );
};
const client = userAPI();

const Profile: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  //@ts-ignore
  const user = useSelector(state => state.user.user)
  const [posts, setPosts] = useState<Post[]>([]);
  const ref = useRef(null)
  useEffect(() => {
    if(localStorage.logged){
      const usr = JSON.parse(localStorage.logged)
      client.getUserPosts(usr.post_ID).then(({ data }) => setPosts(data.posts));
    }
    // console.log('rerender')
  }, []);

  // useEffect(()=> {
  //   window.addEventListener('scroll', e => {
  //     setScrollPosition(window.scrollY)
  //     console.log(scrollPosition)
  //   })
  // },[scrollPosition])

  return (
    <div className="mt-[50px] px-24">
      <div className="flex gap-5 justify-center ">
        <div className='top-5' style={{}}>
          <div ref={ref} className="w-full bg-white p-6 min-w-max btn-shadow rounded-lg">
            <div className="flex space-x-4 ">
              <img
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
                  <img className="inline" src={DotIcon} />
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
        <div className="w-full max-w-[600px] min-w-[600px] transition-all duration-500" style={{opacity: posts.length !=0 ? '1' : '0'}}>
          <div className="w-full p-6 bg-white space-y-5 rounded-lg btn-shadow transition-all">
            {posts?.splice(0, 14).map((el) => {
              return (
                <RecipeCard user={user} recipe={el} key={el.id} />
              );
            })}
          </div>
        </div>
        <div  className='min-w-0  w-full max-w-[310px]'>

        </div>
      </div>
    </div>
  );
};

export default Profile;
