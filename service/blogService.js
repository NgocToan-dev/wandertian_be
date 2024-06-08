import BlogRepo from "../repository/blogRepo.js";
import BaseService from "./_baseService.js";

class BlogService extends BaseService {
  constructor() {
    super();
    this._baseRepo = new BlogRepo();
  }

  async getByTag(tag) {
    return await this._baseRepo.getByTag(tag);
  }
  async getByCategory(category) {
    return await this._baseRepo.getByCategory(category);
  }
}

export default BlogService;
