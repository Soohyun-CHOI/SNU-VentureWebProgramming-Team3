import React from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import {AnimalsList, Home, Report} from "./pages"
import AnimalsDetail from "./pages/Animals/AnimalsDetail";

function App() {
    return (
        <Routes>
            <Route exact path="/report" element={<Report />} />
            <Route exact path="/animals" element={<AnimalsList />} />
            <Route exact path="/animals/:id" element={<AnimalsDetail />} />

            <Route exact path="/*" element={<Home />} />
        </Routes>
    );
}

export default App;
