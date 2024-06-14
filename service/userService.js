import UserRepo from "../repository/userRepo.js";
import BaseService from "./_baseService.js";

class UserService extends BaseService {
  constructor() {
    super();
    this._baseRepo = new UserRepo();
  }
  async checkLogin(username, password){
    return await this._baseRepo.checkLogin(username, password);
  }
}

export default UserService;
