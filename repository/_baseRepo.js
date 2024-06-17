import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";

/**
 * Represents a base repository for MongoDB operations.
 */
class BaseRepo {
  uri =
    "mongodb+srv://pntoan156:Tianmopd2d2b@wandertiancluster.rx8d7yt.mongodb.net/?retryWrites=true&w=majority&appName=wandertianCluster";
  dbName = "wandertian";
  collectionName = "";

  /**
   * Creates an instance of BaseRepo.
   * @param {string} collectionName - The name of the collection to be used.
   */
  constructor(collectionName) {
    this.collectionName = collectionName;
    this.client = new MongoClient(this.uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        deprecationErrors: true,
      },
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
      // add new objectID for _id
      delete data.mode;
      data._id = new ObjectId();
      const result = await collection.insertOne(data);

      return result;
    } catch (err) {
      console.log(err);
    } finally {
      await this.client.close();
    }
  }

  async update(data) {
    try {
      const collection = await this.getCollection();
      delete data.mode;
      const query = { _id: new ObjectId(data._id) };
      const updateDoc = {
        ...data,
      };
      const result = await collection.replaceOne(query, updateDoc, {
        upsert: true,
      });
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

      const query = { _id: new ObjectId(id) };
      const result = await collection.findOne(query);
      return result;
    } catch (err) {
      console.log(err);
    } finally {
      await this.client.close();
    }
  }

  /**
   * Retrieves a paginated list of results from the collection.
   *
   * @param {number} page - The page number.
   * @param {number} limit - The maximum number of results per page.
   * @param {string} filter - The filter to apply to the results.
   * @returns {Promise<Array>} - A promise that resolves to an array of results.
   * @modified by pntoan 12/6/2024 - filter by post status
   */
  async getPaging(payload) {
    try {
      payload = {
        page: 0,
        limit: 20,
        filter: "",
        filterStatus: "",
        column: "*",
        ...payload,
      };
      const collection = await this.getCollection();
      let cursor = null;
      if (!payload.filterStatus) {
        cursor = collection
          .find(
            {},
            { projection: payload.column === "*" ? {} : payload.column }
          )
          .skip(payload.page * payload.limit)
          .limit(payload.limit)
          .sort({ createdDate: -1 });
      } else {
        if (payload.filter === "") {
          cursor = collection
            .find(
              { postStatus: payload.filterStatus },
              { projection: payload.column === "*" ? {} : payload.column }
            )
            .skip(payload.page * payload.limit)
            .limit(payload.limit)
            .sort({ createdDate: -1 });
        } else {
          cursor = collection
            .find(
              {
                $text: { $search: payload.filter },
                postStatus: payload.filterStatus,
              },
              { projection: payload.column === "*" ? {} : payload.column }
            )
            .skip(payload.page * payload.limit)
            .limit(payload.limit)
            .sort({ createdDate: -1 });
        }
      }

      const results = await cursor.toArray();
      return results;
    } catch (err) {
      console.log(err);
    } finally {
      await this.client.close();
    }
  }
  /**
   * Retrieves the paging summary based on the provided filter and filterStatus.
   * @param {string} filter - The filter to be applied.
   * @param {string} filterStatus - The status to filter by.
   * @returns {Object} The paging summary object containing the total count.
   * @throws {Error} If an error occurs while retrieving the paging summary.
   */
  async getPagingSummary(filter, filterStatus) {
    try {
      const collection = await this.getCollection();
      let total = 0;
      if (!filterStatus) {
        total = await collection.countDocuments();
      } else {
        if (filter === "") {
          total = await collection.countDocuments({ postStatus: filterStatus });
        } else {
          total = await collection.countDocuments({
            $text: { $search: filter },
            postStatus: filterStatus,
          });
        }
      }

      const summary = {
        total: total,
      };
      return summary;
    } catch (err) {
      console.log(err);
    } finally {
      await this.client.close();
    }
  }
  async delete(id) {
    try {
      const collection = await this.getCollection();

      const query = { _id: new ObjectId(id) };
      const result = await collection.deleteOne(query);
      return result;
    } catch (err) {
      console.log(err);
    } finally {
      await this.client.close();
    }
  }
}

export default BaseRepo;
