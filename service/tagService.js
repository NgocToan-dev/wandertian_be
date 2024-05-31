import CategoryRepo from "../repository/categoryRepo.js";
import BaseService from "./_baseService.js";

class TagService extends BaseService {
  constructor() {
    super();
    this._baseRepo = new TagRepo();
  }
}

export default TagService;
