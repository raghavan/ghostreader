import {Embedding, TextElement} from "./types";
import {createEmbeddings} from "./OpenAI";

/**
 * It will create Embeddings for the text elements on the page.
 *
 * Warning: This is a very expensive operation. so it should be called sparingly.
 *
 * @param textElements The text elements to create embeddings for.
 * @returns The embeddings.
 */
export async function createEmbeddingsForLines(textElements: TextElement[]): Promise<Embedding[]> {
    console.info("Computing embeddings for complete page!")

    const lines = textElements.map(e => e.text)

    if (!lines || lines.length === 0) {
        return [];
    }

    const embeddings = await createEmbeddings(lines);

    return embeddings.data.map((e) => ({
        element: textElements[e.index].element,
        line: textElements[e.index].text,
        embedding: e.embedding,
    }));
}