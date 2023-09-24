import { env } from "./config";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import { PineconeClient } from "@pinecone-database/pinecone";

export async function embedAndStoreDocs(
  client: PineconeClient,
  // @ts-ignore docs type error
  docs: Document<Record<string, any>>[]
) {
  
  try {
    const embeddings = new OpenAIEmbeddings();
    const index = client.Index(env.PINECONE_INDEX_NAME);
    await PineconeStore.fromDocuments(docs, embeddings, {
      pineconeIndex: index,
      namespace: env.PINECONE_NAME_SPACE,
      textKey: "text",
    });
  } catch (error) {
    console.log("ERROR ", error);
    throw new Error("DOCUMENT PROCESSING FAILED");
  }
}

export async function getVectorStore(client: PineconeClient) {
  try {
    const embeddings = new OpenAIEmbeddings();
    const index = client.Index(env.PINECONE_INDEX_NAME);

    const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
      pineconeIndex: index,
      textKey: "text",
      namespace: env.PINECONE_NAME_SPACE,
    });

    return vectorStore;
  } catch (error) {
    console.log("ERROR", error);
    throw new Error("ERROR ENCOUNTERED!");
  }
}
