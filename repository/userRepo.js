import enumeration from "../common/enum.js";
import BaseRepo from "./_baseRepo.js";
import { ObjectId } from "mongodb";

class UserRepo extends BaseRepo {
  constructor() {
    const collectionName = "user";
    super(collectionName);
  }
  async checkLogin(email, password) {
    try {
      const collection = await this.getCollection();
      const user = await collection.findOne(
        { email, password },
        { projection: { password: 0 } }
      );
      let contextReturn = null;
      if (user) {
        const context = await this.getContext();
        contextReturn = {
          user_id: user._id,
          username: user.username,
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

  async signUp(user) {
    try {
      const collection = await this.getCollection();
      // check if user exists
      let userExist = await collection.findOne({ email: user.email });
      if (userExist) {
        return {
          error: enumeration.validateSave.DUPLICATE_EMAIL,
        };
      }
      userExist = await collection.findOne({ username: user.username });
      if (userExist) {
        return {
          error: enumeration.validateSave.DUPLICATE_USERNAME,
        };
      }
      // add new objectID for _id
      delete user.mode;
      delete user.confirmPassword;
      user._id = new ObjectId();
      const result = await collection.insertOne(user);

      return result;
    } catch (err) {
      console.log(err);
    } finally {
      await this.client.close();
    }
  }
}

export default UserRepo;
