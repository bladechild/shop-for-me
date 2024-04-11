import React from "react";
import App from "./App";
import store from "./Store/store";
import { Provider } from "react-redux";
import "./i18n";
import i18next from 'i18next';
import 'flag-icons/css/flag-icons.min.css';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

const lang = localStorage.getItem("lang") || "en"
i18next.changeLanguage(lang);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
