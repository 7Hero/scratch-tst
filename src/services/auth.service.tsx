import UserService from "./user.service";

export default class AuthService {
  user_service: UserService;
  constructor() {
    this.user_service = new UserService();
  }

  async login(email: string, password: string) {
    const { data: user } = await this.user_service.getUser(email, password);
    if (user.isEmpty()) {
      return { error: true, message: "Incorect Email or Password." };
    }
    const { data: profile } = await this.user_service.getProfile(user[0].id);
    if (profile.isEmpty()) {
      return { error: true, message: "Incorect Email or Password." };
    }
    return { error: false, data: {...user[0],...profile[0]}};
  }

  signout() {}
}
