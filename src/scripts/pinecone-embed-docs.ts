import { getChunkedDocsFromPDF } from "@/lib/pdf-loader";
import { embedAndStoreDocs } from "@/lib/vector-store";
import { getPineconeClient } from "@/lib/pinecone-clients";


(async () => {
  try {
    const pineconeClient = await getPineconeClient();
    console.log("Preparing chunks from PDF file");
    const docs = await getChunkedDocsFromPDF();
    console.log(`Loading ${docs.length} chunks into PINECONE`);
    await embedAndStoreDocs(pineconeClient, docs);
    console.log("DATA EMBEDDED AND STORED");
  } catch (error) {
    console.error("FAILED: INIT CLIENT", error);
  }
})();