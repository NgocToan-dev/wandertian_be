import { ObjectId } from "mongodb";
import BaseRepo from "./_baseRepo.js";

class BlogRepo extends BaseRepo {
  constructor() {
    const collectionName = "blog";
    super(collectionName);
  }

  async getPaging(payload) {
    payload.column = {
      contents: 0,
    };
    return await super.getPaging(payload);
  }
  /**
   * Get all blog posts by tag
   * @param {*} tag
   * @returns
   */
  async getByTag(tag) {
    try {
      const collection = await this.getCollection();
      // tags is an array of object in the collection
      const results = await collection
        .find({ tag: { $elemMatch: { name: tag } } })
        .toArray();

      return results;
    } catch (err) {
      console.log(err);
    } finally {
      await this.client.close();
    }
  }
  /**
   * Get all blog posts by category
   * @param {*} category
   * @returns
   */
  async getByCategory(category, limit, post_ids) {
    try {
      const collection = await this.getCollection();
      // category is an array of object in the collection
      // except for some post_ids
      let results;
      if (limit) {
        results = await collection
          .find({
            _id: { $nin: [...post_ids].map((e) => new ObjectId(e)) },
            category: {
              $elemMatch: { name: category },
            },
          })
          .limit(limit)
          .toArray();
      } else {
        results = await collection
          .find({
            category: {
              $elemMatch: { name: category },
              _id: { $nin: [...post_ids] },
            },
          })
          .toArray();
      }

      return results;
    } catch (err) {
      console.log(err);
    } finally {
      await this.client.close();
    }
  }
}

export default BlogRepo;
