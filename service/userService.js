import UserRepo from "../repository/userRepo.js";
import BaseService from "./_baseService.js";

class UserService extends BaseService {
  constructor() {
    super();
    this._baseRepo = new UserRepo();
  }
  async checkLogin(email, password){
    return await this._baseRepo.checkLogin(email, password);
  }
  async signUp(user){
    return await this._baseRepo.signUp(user);
  }
}

export default UserService;
