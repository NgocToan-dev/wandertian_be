import BaseRepo from "./_baseRepo.js";

class BlogRepo extends BaseRepo {
  constructor() {
    const collectionName = "blog";
    super(collectionName);
  }
}

export default BlogRepo;
