import BaseRepo from "./_baseRepo.js";

class BlogRepo extends BaseRepo {
  constructor() {
    const collectionName = "blog";
    super(collectionName);
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
  async getByCategory(category) {
    try {
      const collection = await this.getCollection();
      // category is an array of object in the collection
      const results = await collection
        .find({ category: { $elemMatch: { name: category } } })
        .toArray();

      return results;
    } catch (err) {
      console.log(err);
    } finally {
      await this.client.close();
    }
  }
}

export default BlogRepo;
