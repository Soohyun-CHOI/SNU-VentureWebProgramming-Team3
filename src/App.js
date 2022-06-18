import React from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import {AnimalsList, Home, Report} from "./pages"

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/report" element={<Report />} />
            <Route exact path="/animals" element={<AnimalsList />} />
        </Routes>
    );
}

export default App;
