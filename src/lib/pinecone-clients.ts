import { PineconeClient } from "@pinecone-database/pinecone";
import { env } from "./config";
import { delay } from "./utils";

let pineconeClientInstance: PineconeClient | null = null;

async function createIndex(client: PineconeClient, indexName: string) {
  try {
    await client.createIndex({
      createRequest: {
        name: indexName,
        dimension: 1536,
        metric: "cosine",
      },
    });
    console.log(`Wait ${env.INDEX_INIT_TIMEOUT} seconds for initialising`);
    await delay(env.INDEX_INIT_TIMEOUT);
    console.log("Index creation successfull");
  } catch (error) {
    console.error("error ", error);
    throw new Error("Index creation failed");
  }
}

async function initPineconeClient() {
  try {
    const pineconeClient = new PineconeClient();
    await pineconeClient.init({
      apiKey: env.PINECONE_API_KEY,
      environment: env.PINECONE_ENVIRONMENT,
    });
    const indexName = env.PINECONE_INDEX_NAME;

    const existingIndexes = await pineconeClient.listIndexes();

    if (!existingIndexes.includes(indexName)) {
      createIndex(pineconeClient, indexName);
    } else {
      console.log("Index Exists!");
    }

    return pineconeClient;
  } catch (error) {
    console.error("Error", error);
    throw new Error("Pinecone Client Initialisation Failed!");
  }
}

export async function getPineconeClient() {
  if (!pineconeClientInstance) {
    pineconeClientInstance = await initPineconeClient();
  }

  return pineconeClientInstance;
}
