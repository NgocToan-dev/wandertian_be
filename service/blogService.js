import BlogRepo from "../repository/blogRepo.js";
import BaseService from "./_baseService.js";

class BlogService extends BaseService {
  constructor() {
    super();
    this._baseRepo = new BlogRepo();
  }
}

export default BlogService;
