import CommentRepo from "../repository/commentRepo.js";
import BaseService from "./_baseService.js";

class CommentService extends BaseService {
  constructor() {
    super();
    this._baseRepo = new CommentRepo();
  }
  async getCommentOfPost(post_id){
    return await this._baseRepo.getCommentOfPost(post_id);
  }
  async getRepliesOfComment(comment_id){
    return await this._baseRepo.getRepliesOfComment(comment_id);
  }
}

export default CommentService;
