import React from "react";
import {useNavigate} from "react-router-dom";

function AppError() {
    return <div className="popup">
        <div className="app__header">
            <div className="app__title">Ghost Reader</div>
            <button
                className="app__logout-button"
                onClick={() => {
                    chrome.storage.sync.remove("key", () => {
                        useNavigate()("/")
                    })
                }}>🗑️
            </button>
        </div>
        <div className="error">
            <div className="error__title">Something went wrong!</div>
        </div>


    </div>
}

export default AppError