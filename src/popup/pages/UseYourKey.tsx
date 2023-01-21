import React from "react"
import {useNavigate} from "react-router-dom";
import {MdNavigateNext} from "react-icons/md";
import {getEmbeddings} from "../../helpers/OpenAI";
import Loading from "../components/Loading";
import Header from "../components/Header";

function UseYourKey() {
    const navigate = useNavigate()
    const [key, setKey] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");

    async function handleNext() {
        setLoading(true);
        const pong = await getEmbeddings(key, "Ping");

        if (!pong.error) {
            chrome.storage.sync.set({key}, () => {
                navigate("/")
            });
        } else {
            setLoading(false);
            setError("Invalid key");
        }
    }

    function handleKeyChange(e: React.ChangeEvent<HTMLInputElement>) {
        setError("");
        setKey(e.target.value);
    }

    return <div className="popup">
        <Header/>
        <div className="app__container">
            <div className="row row-center">
                <input
                    className="input-field"
                    value={key}
                    placeholder="Add your OpenAI API key here..."
                    type="text"
                    onChange={(e) => handleKeyChange(e)}
                />
                {
                    loading
                        ? <Loading/>
                        : <button className="button" onClick={handleNext}>
                            <span className="icon"><MdNavigateNext/></span>
                        </button>
                }
            </div>
            <div className="inline-error">{error}</div>
        </div>
    </div>
}

export default UseYourKey