import axios from "axios";

export default class UserService {
  readonly url: string = "http://localhost:5001";

  getUser(email: string, password: string) {
    return axios.get(this.url + `/users?email=${email}&password=${password}`);
  }
  getProfile(id: string) {
    return axios.get(this.url + `/profiles/?id=${id}`);
  }
}
