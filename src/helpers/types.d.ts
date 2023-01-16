export interface TextElement {
    index: number,
    element: HTMLElement,
    text: string,
}

export interface Embedding {
    element: HTMLElement,
    line: string,
    embedding: number[],
}

export interface OpenAIEmbeddingResponse {
    object: string,
    model: string,
    usage: Usage,
    data: EmbeddingData[],
    error: string | null,
}

interface EmbeddingData {
    object: string,
    embedding: number[]
    index: number

}

interface Usage {
    prompt_tokens: number,
    total_tokens: number,
}

export interface OpenAICompletionResponse {
    object: string,
    model: string,
    choices: Choice[],
    usage: Usage,
    error: string | null,
}

interface Choice {
    text: string,
}
