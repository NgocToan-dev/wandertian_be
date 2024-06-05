import UserRepo from "../repository/userRepo.js";
import BaseService from "./_baseService.js";

class UserService extends BaseService {
  constructor() {
    super();
    this._baseRepo = new UserRepo();
  }
  checkLogin(){
    return this._baseRepo.checkLogin();
  }
}

export default UserService;
