import {TextElement} from "./types";

/**
 * It will extract the text from the page.
 * It will select the text elements like h1, h2, h3, p, li, etc.
 * It will return the text elements and the text.
 *
 * @param document The Document to extract text from.
 * @returns The extracted text.
 */
export function extract(document: Document): TextElement[] {
    return Array.from(document.body.querySelectorAll("p, li, h1, h2, h3, h4, h5, h6, span"))
        .map(e => e as HTMLElement)
        .filter((element) => element.innerText.split(" ").length > 5)
        .map((element, index) => {
            return {
                index,
                element,
                text: element.innerText,
            }
        });
}