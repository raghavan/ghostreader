import {OpenAICompletionResponse} from "./types";
import {createCompletion} from "./OpenAI";


/**
 * It will create a summary for the given text. It will use the OpenAI API.
 * The size of the summary will be 1/5 of the size of the text or 360 which ever is smaller.
 *
 * @param text The text to create a summary for (max: 2048 characters).
 * @returns The summary.
 */
export async function summarize(text: string): Promise<OpenAICompletionResponse> {
    const contentLength = text.length;
    const completionLength = Math.min(360, Math.round(text.split(" ").length / 5));
    const totalLength = contentLength + completionLength;

    // This is to be within the OpenAI API limits.
    if (totalLength > 3000) {
        text = text.substring(0, 3000 - completionLength);
    }

    const prompt = `Remove all code blocks, hyperlinks, etc. from the ${text} and then summarize it. 
    Also, use HTML to highlight the important parts of the text. Do not include code blocks, hyperlinks, etc. in the summary.`;

    return createCompletion(prompt, completionLength);
}