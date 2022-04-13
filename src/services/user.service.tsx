import axios from "axios";

export default class UserService {
  readonly url: string = "http://localhost:5001";

  getUser(email: string, password: string) {
    return axios.get(this.url + `/users?email=${email}&password=${password}`);
  }
  getProfile(id: string) {
    return axios.get(this.url + `/profiles/?id=${id}`);
  }
  getUserPosts(post_id: string) {
    return axios.get(this.url + `/user_posts/${post_id}`);
  }
}

let cachedClient: UserService | null = null;

export function userAPI(){
  if(cachedClient) return cachedClient
  cachedClient = new UserService();
  return cachedClient;
}
