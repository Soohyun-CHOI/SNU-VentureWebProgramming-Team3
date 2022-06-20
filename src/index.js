import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AnimalTest} from "./pages";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/test" element={<AnimalTest />} />
        </Routes>
    </BrowserRouter>
);


