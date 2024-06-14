import BaseRepo from "./_baseRepo.js";

class UserRepo extends BaseRepo {
  constructor() {
    const collectionName = "user";
    super(collectionName);
  }
  async checkLogin(username, password) {
    try {
      const collection = await this.getCollection();
      const user = await collection.findOne({ username, password }, { _id: 1 });
      let contextReturn = null;
      if (user) {
        const context = await this.getContext();
        contextReturn = {
          user_id: user._id,
          ...context,
        };
        return {
          context: contextReturn,
          token: "fakeToken",
          isAdmin: user.isAdmin,
        };
      }
      return null;
    } catch (err) {
      console.log(err);
    } finally {
      await this.client.close();
    }
  }
  async getContext() {
    return {};
  }
}

export default UserRepo;
