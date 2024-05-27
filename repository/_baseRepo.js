import { MongoClient, ObjectId } from "mongodb";

/**
 * Represents a base repository for MongoDB operations.
 */
class BaseRepo {
  uri = "mongodb://localhost:27017/";
  dbName = "wandertian";
  collectionName = "";

  /**
   * Creates an instance of BaseRepo.
   * @param {string} collectionName - The name of the collection to be used.
   */
  constructor(collectionName) {
    this.collectionName = collectionName;
    this.client = new MongoClient(this.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  /**
   * Retrieves the MongoDB collection.
   * @returns {Promise<Collection>} The MongoDB collection.
   * @throws {Error} If the collection name is not set.
   */
  async getCollection() {
    try {
      await this.client.connect();
      if (this.collectionName === "") {
        throw new Error("Collection name is not set");
      }

      const database = this.client.db(this.dbName);
      const collection = database.collection(this.collectionName);

      return collection;
    } catch (err) {
      console.log(err);
    }
  }

  /**
   * Retrieves all documents from the collection.
   * @returns {Promise<Array>} An array of documents.
   */
  async getAll() {
    try {
      const collection = await this.getCollection();

      const cursor = collection.find();
      const results = await cursor.toArray();

      return results;
    } catch (err) {
      console.log(err);
    } finally {
      await this.client.close();
    }
  }

  /**
   * Creates a new document in the collection.
   * @param {Object} data - The data for the new document.
   * @returns {Promise<InsertOneResult>} The result of the insert operation.
   */
  async create(data) {
    try {
      const collection = await this.getCollection();

      const result = await collection.insertOne(data);

      return result;
    } catch (err) {
      console.log(err);
    } finally {
      await this.client.close();
    }
  }

  /**
   * Retrieves a document by its ID.
   * @param {string} id - The ID of the document.
   * @returns {Promise<Object>} The document.
   */
  async getById(id) {
    try {
      const collection = await this.getCollection();

      const query = { _id: new ObjectId("66531a9d3547778c0ed935c4") };
      const result = await collection.findOne(query);
      return result;
    } catch (err) {
      console.log(err);
    } finally {
      await this.client.close();
    }
  }
}

export default BaseRepo;
