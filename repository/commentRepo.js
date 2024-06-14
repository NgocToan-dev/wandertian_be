import BaseRepo from "./_baseRepo.js";
import { ObjectId } from "mongodb";

class CommentRepo extends BaseRepo {
  constructor() {
    const collectionName = "comment";
    super(collectionName);
  }
  async getCommentOfPost(post_id) {
    try {
      const collection = await this.getCollection();
      const results = await collection.find({ post_id: post_id }).toArray();
      return results;
    } catch (err) {
      console.log(err);
    } finally {
      await this.client.close();
    }
  }
  async getRepliesOfComment(comment_id) {
    try {
      const collection = await this.getCollection();
      const results = await collection
        .find({ parent_id: comment_id })
        .toArray();
      return results;
    } catch (err) {
      console.log(err);
    } finally {
      await this.client.close();
    }
  }
}

export default CommentRepo;
