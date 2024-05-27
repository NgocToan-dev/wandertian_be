import BaseRepo from "../repository/_baseRepo.js";

class BaseService {
  constructor(controllerName) {
    this._baseRepo = new BaseRepo(controllerName);
  }

  async getAll() {
    return this._baseRepo.getAll();
  }

  async getById(id) {
    return this._baseRepo.getById(id);
  }
}

export default BaseService;
