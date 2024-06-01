import TagRepo from "../repository/tagRepo.js";
import BaseService from "./_baseService.js";

class TagService extends BaseService {
  constructor() {
    super();
    this._baseRepo = new TagRepo();
  }
}

export default TagService;
