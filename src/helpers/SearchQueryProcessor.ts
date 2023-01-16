import {createEmbeddings} from "./OpenAI";
import {computeCosineSimilarityBetween} from "./Math";
import {Embedding} from "./types";


/**
 * It will create Embeddings for the search query and compute cosine similarity with the embeddings
 * of the text elements on the page that are computed on initial page load and cached.
 *
 * @param query The search query.
 * @param embeddings The embeddings of the text elements on the page.
 * @returns The top most similar text element.
 */
export async function findTopSearchMatch(query: string, embeddings: Promise<Embedding[]>) {
    const searchEmbedding = (await createEmbeddings(query)).data[0].embedding;

    const similarities = (await embeddings).map((e) => {
        return {
            ...e,
            similarity: computeCosineSimilarityBetween(e.embedding, searchEmbedding)
        }
    }).sort((a, b) => b.similarity - a.similarity);

    return similarities[0];
}