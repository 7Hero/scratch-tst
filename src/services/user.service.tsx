import axios from "axios";

export default class UserService {
  readonly url: string = 'http://localhost:5001/users?email=surtest@furl.net&password=4MAWvh63HQU9';

  constructor(){
  
  }
  async getUser(email: string,password: string) {
    return await axios.get(this.url)
  }
    
}