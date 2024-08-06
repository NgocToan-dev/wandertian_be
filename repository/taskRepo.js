import BaseRepo from "./_baseRepo.js";

class TaskRepo extends BaseRepo {
  constructor() {
    const collectionName = "task";
    super(collectionName);
  }
}

export default TaskRepo;
