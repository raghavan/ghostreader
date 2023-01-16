import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";


function Header() {
    const navigate = useNavigate();
    const [showLogout, setShowLogout] = React.useState(false);

    useEffect(() => {
        (async () => {
                const {key} = await chrome.storage.sync.get("key");
                setShowLogout(key !== undefined);
            }
        )()
    })

    return <div className="app__header">
        <div className="row">
            <img src="./icons/icon-32.png"/>
            <div className="app__title">Ghost Reader</div>
        </div>
        {showLogout ?
            <button
                className="button"
                onClick={() => {
                    chrome.storage.sync.remove("key")
                    navigate("/key")
                }}>Reset API key
            </button>
            : <div/>
        }
    </div>
}

export default Header