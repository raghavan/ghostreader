import {OpenAICompletionResponse, OpenAIEmbeddingResponse} from "./types";


/**
 * It will create an embedding for the given text. It will use the OpenAI API.
 * Warning: The OpenAI key must be set in the sync storage.
 *
 * @param input The text to create an embedding for.
 * @returns The embedding.
 */
export async function createEmbeddings(input: string | string[]): Promise<OpenAIEmbeddingResponse> {
    const {key} = await chrome.storage.sync.get('key');

    if (!key) {
        console.error('No OpenAI API key found');
        return {
            object: 'error',
            model: '',
            usage: {
                prompt_tokens: 0,
                total_tokens: 0,
            },
            data: [],
            error: 'No OpenAI API key found in storage',
        }
    }

    return getEmbeddings(key, input);
}


/**
 * It will create an embedding for the given text. It will use the OpenAI API.
 * Info: This function uses "text-embedding-ada-002" as the model.
 *
 * @param key The OpenAI API key.
 * @param input The text to create an embedding for.
 * @returns The embedding.
 */

export async function getEmbeddings(key: string, input: string | string[]): Promise<OpenAIEmbeddingResponse> {
    const response = await fetch("https://api.openai.com/v1/embeddings", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${key}`,
        },
        body: JSON.stringify({
            "input": input,
            "model": "text-embedding-ada-002"
        })
    })

    if (response.status !== 200) {
        console.error('OpenAI API error', JSON.stringify(await response.json()));
        return {
            object: 'error',
            model: '',
            usage: {
                prompt_tokens: 0,
                total_tokens: 0,
            },
            data: [],
            error: `OpenAI API error: ${response.status}`,
        }
    }

    return response.json();
}


/**
 * It will complete the given prompt. It will use the OpenAI API.
 * Warning: The OpenAI key must be set in the sync storage.
 *
 * @param prompt The prompt to complete.
 * @param maxTokens The maximum number of tokens to generate.
 */
export async function createCompletion(prompt: string, maxTokens: number): Promise<OpenAICompletionResponse> {
    const {key} = await chrome.storage.sync.get('key');

    if (!key) {
        console.error('No OpenAI API key found');
        return {
            object: 'error',
            model: '',
            usage: {
                prompt_tokens: 0,
                total_tokens: 0,
            },
            choices: [],
            error: 'No OpenAI API key found in storage',
        }
    }

    return getCompletion(key, prompt, maxTokens);
}


/**
 * It will complete the given prompt. It will use the OpenAI API.
 * Info: This function uses "text-davinci-003" as the model.
 *
 * @param key The OpenAI API key.
 * @param prompt The prompt to complete.
 * @param maxTokens The maximum number of tokens to generate (default: 256).
 */
export async function getCompletion(key: string, prompt: string, maxTokens: number = 256): Promise<OpenAICompletionResponse> {
    const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${key}`,
        },
        body: JSON.stringify({
            "model": "text-davinci-003",
            "prompt": prompt,
            "max_tokens": maxTokens,
            "temperature": 0.5,
            "top_p": 1
        })
    });

    if (response.status !== 200) {
        console.error('OpenAI API error', JSON.stringify(await response.json()));
        return {
            object: 'error',
            model: '',
            usage: {
                prompt_tokens: 0,
                total_tokens: 0,
            },
            choices: [],
            error: `OpenAI API error: ${response.status}`,
        }
    }

    return response.json();
}
