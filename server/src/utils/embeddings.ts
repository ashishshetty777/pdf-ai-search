//embeddings.ts

import OpenAI from "openai";
import config from "../config";

/**
 * Embed a piece of text using an embedding model or service.
 * This is a placeholder and needs to be implemented based on your embedding solution.
 *
 * @param text The text to embed.
 * @returns The embedded representation of the text.
 */
export async function embedChunks(chunks: string[]): Promise<any> {
  // You can use any embedding model or service here.
  // In this example, we use OpenAI's text-embedding-ada-002 model.
  const openai = new OpenAI({
    apiKey: config.openAiApiKey,
    organization: config.openAiOrganizationId,
  });
  try {
    const response = await openai.embeddings.create({
      model: "text-embedding-ada-002",
      input: chunks,
      encoding_format: "float",
      dimensions: 1536,
    });
    return response.data;
  } catch (error) {
    console.error("Error embedding text with OpenAI:", error);
    throw error;
  }
}
