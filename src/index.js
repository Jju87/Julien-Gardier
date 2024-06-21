import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Accueil from "./Pages/Accueil/Accueil";
import Home from "./Pages/Home/Home";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import ErrorPageEng from "./Pages/ErrorPage/ErrorPageEng";

import "../src/Styles/main.scss";
const julienGardier = ReactDOM.createRoot(
    document.getElementById("julienGardier")
);
julienGardier.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/eng/" element={<Home />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/eng/*" element={<ErrorPageEng />} />
            </Routes>
        </Router>
    </React.StrictMode>
);


