import BaseRepo from "./_baseRepo.js";

class CategoryRepo extends BaseRepo {
  constructor() {
    const collectionName = "category";
    super(collectionName);
  }
}

export default CategoryRepo;
