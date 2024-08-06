import TaskRepo from "../repository/taskRepo.js";
import BaseService from "./_baseService.js";

class TaskService extends BaseService {
  constructor() {
    super();
    this._baseRepo = new TaskRepo();
  }
}

export default TaskService;
