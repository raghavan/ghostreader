import {OpenAICompletionResponse} from "../helpers/types";
import ReactDOM from "react-dom/client";
import React from "react";
import {IoIosRemoveCircle} from "react-icons/io";

/**
 * It will inject the summary into the page.
 * @param summary
 */
export function embedSummaryIntoPage(summary: OpenAICompletionResponse) {
    handleRemove();

    const div = document.createElement("div");
    div.id = "ghost-reader-root";
    document.body.appendChild(div);

    const root = ReactDOM.createRoot(document.getElementById("ghost-reader-root")!);
    root.render(<Summary text={summary.choices[0].text}/>);
}

function Summary({text}) {

    return <div className="ghost-reader-colorful-bk">
        <div className="ghost-reader-summary">
            <div className="ghost-reader-summary-title">
                <div>Summary</div>
            </div>
            <hr className="ghost-reader-summary-divider"/>
            <button className="ghost-reader-remove-button" onClick={handleRemove}><IoIosRemoveCircle/></button>
            <div className="ghost-reader-summary-text">
                <div dangerouslySetInnerHTML={{__html: text}}/>
            </div>
        </div>
    </div>
}

function handleRemove() {
    document.getElementById("ghost-reader-root")?.remove();
}