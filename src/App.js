import React from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import {Home, Report} from "./pages"

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/report" element={<Report />} />
        </Routes>
    );
}

export default App;
