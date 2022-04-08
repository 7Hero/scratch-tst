import axios from "axios";

export default class UserService {
  readonly url: string = "http://localhost:5001";

  constructor() {}
  getUser(email: string, password: string) {
    return axios.get(this.url + `/users?email=${email}&password=${password}`);
  }
}
