# 👻 Ghost Reader - Find anything on the page.

## Privacy
 - 🔒 We don't store your API key, it's only used to make requests to OpenAI API.
 - 🚫 Nothing is sent to our servers because we don't have any 😀.

## Welcome to our Chrome Extension

 Our Chrome extension allows you to process the content on a webpage and use it to:
```
- Find the most important sentences on the page
- Answer user search queries using the content on the page
- Summarize the text on the page in a few sentences
```
  
## Use your OpenAI API key
  - 🆓 Extension is free to use, but you need to provide your OpenAI API key. You can get it from [OpenAI Dashboard.](https://beta.openai.com/account/api-keys)
  - 🔒 We don't store your API key, it's only used to make requests to OpenAI API.
  - 🚫 Nothing is sent to our servers because we don't have any 😄.
 
[How to generate OpenAI API key?](https://user-images.githubusercontent.com/46283833/212459549-629e0795-c10f-4950-a560-1f03baf0fe88.mp4)

## How to use
 - Install the extension from the Chrome Web Store
 - Generate a OpenAI key by visiting Open AI - API keys
 - Insert your OpenAI key into the extension (**_we don't store your key!_**)
 - Navigate to a webpage
 - Click the extension icon
 - Choose to either summarize the text or enter a search query on the page.

## How search works
 - When you visit a webpage with the extension installed and enabled, the extension will create an embedding for the complete page. This embedding is cached until you close the page.
 - When you enter a search query, the extension creates an embedding for the search terms you are interested in.
 - The extension calculates the cosine similarity between the full page embedding and the search embedding.
 - If there is a relevant search term with 75% or more similarity, the extension will scroll the term into view and highlight it with a yellow background.

## How summarization works
 - When you visit a webpage with the extension installed and enabled, the extension will store the complete page text.
 - When you click the summarize button, the extension will send the complete page text to the OpenAI API.
 - The OpenAI API will return a summary of the page text.
 - The extension will display the summary in a popup window.

We hope you find our extension helpful and welcome any feedback you may have. Thank you for using our extension!

## How to build this code
```
npm install
npm run build
```
A new folder named `dist` should appear, use these [instructions](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked) to load the (dist folder) extension to your browser.