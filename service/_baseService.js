import BaseRepo from "../repository/_baseRepo.js";

class BaseService {
  constructor() {
    this._baseRepo = new BaseRepo();
  }

  async getAll() {
    return this._baseRepo.getAll();
  }

  async getById(id) {
    return this._baseRepo.getById(id);
  }

  async create(data) {
    return this._baseRepo.create(data);
  }

  async update(id, data) {
    return this._baseRepo.update(id, data);
  }
  async getPaging(page, limit, filter) {
    return this._baseRepo.getPaging(page, limit, filter);
  }
  async getPagingSummary(filter) {
    return this._baseRepo.getPagingSummary(filter);
  }
  async delete(id) {
    return this._baseRepo.delete(id);
  }
}

export default BaseService;
