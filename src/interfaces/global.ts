type Link = string;

export interface IUser {
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
export interface IPost {
  id: number;
  title: string;
  body: string;
  time: number;
  image: Link;
}
export interface Error {
  error: boolean;
  style: React.CSSProperties;
}

