import BaseRepo from "./_baseRepo.js";

class BlogRepo extends BaseRepo {
  collectionName = "Blog";
  constructor() {
    super(this.collectionName);
  }
}

export default BlogRepo;
