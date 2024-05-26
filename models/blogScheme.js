import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/";
const dbName = "wandertian";
const collectionName = "Blog";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function getBlog() {
  try {
    await client.connect();
    console.log("Connected successfully to server");

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    const cursor = collection.find();
    const results = await cursor.toArray();

    return results;
  } finally {
    await client.close();
  }
}

export default getBlog;
