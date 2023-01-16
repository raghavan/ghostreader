import React from "react";
import {BeatLoader} from "react-spinners";


function Loading() {
    return <div className="loading">
        <BeatLoader size="8px" color="#ffffff"/>
    </div>
}

export default Loading