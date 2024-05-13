import React from 'react';
import ReactDOM from 'react-dom/client';
// Import de la fonctionnalité de routage
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Accueil from './Pages/Accueil/Accueil';

import '../src/Styles/main.scss';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
        <Router>         
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/eng/" element={<Accueil />} />
                </Routes>          
        </Router>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
