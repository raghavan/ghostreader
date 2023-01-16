import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import {createMemoryRouter, json, redirect, RouterProvider} from "react-router-dom";
import AppError from "./pages/AppError";
import UseYourKey from "./pages/UseYourKey";
import App from "./pages/App";

const router = createMemoryRouter([
    {
        path: "/key",
        element: <UseYourKey/>,
        errorElement: <AppError/>
    },
    {
        path: "/",
        element: <App/>,
        loader: async () => {
            const {key} = await chrome.storage.sync.get(["key"])
            if (!key) {
                return redirect("/key")
            }
            return json({key})
        },
        errorElement: <AppError/>
    },
    {
        path: "/error",
        element: <AppError/>
    }
])


const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <RouterProvider router={router}/>
);