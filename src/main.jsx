import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
// import AllReducers from "./reducers/AllReducers.jsx";
import App from "./App.jsx";
import "./index.css";
import store from "./store/store.js";
// const store = createStore(AllReducers);

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
