import BaseRepo from "./_baseRepo.js";

class TagRepo extends BaseRepo {
  constructor() {
    const collectionName = "tag";
    super(collectionName);
  }
}

export default TagRepo;
