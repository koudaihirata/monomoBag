import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import PackingPage from "./Pages/PackingPage/page";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Bags from "./Pages/Bags/page";
import { Provider } from "react-redux";
import { store } from "./store/store";
import List from "./Pages/List/page";
import Traveldestination from "./components/Traveldestination/Traveldestination";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<PackingPage />} />
            <Route path="/bag/:id" element={<Bags />} />
            <Route path="/list" element={<List />} />
            <Route path="/registration" element={<Traveldestination />} />
        </>
    )
);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <main>
                <section>
                    <RouterProvider router={router} />
                </section>
            </main>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
