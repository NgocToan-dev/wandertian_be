import CategoryRepo from "../repository/categoryRepo.js";
import BaseService from "./_baseService.js";

class CategoryService extends BaseService {
  constructor() {
    super();
    this._baseRepo = new CategoryRepo();
  }
}

export default CategoryService;
