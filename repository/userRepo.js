import BaseRepo from "./_baseRepo.js";

class UserRepo extends BaseRepo {
  constructor() {
    const collectionName = "user";
    super(collectionName);
  }
  async checkLogin(username, password) {
    try {
      const collection = await this.getCollection();
      const user = await collection.findOne({ username, password });
      return user;
    } catch (err) {
      console.log(err);
    } finally {
      await this.client.close();
    }
  }
}

export default UserRepo;
