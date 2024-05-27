import BlogRepo from "../repository/blogRepo.js";
import BaseService from "./_baseService.js";

class BlogService extends BaseService {
  constructor() {
    const controllerName = "Blog";
    super(controllerName);
  }
}

export default BlogService;
