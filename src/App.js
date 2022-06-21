import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Animals, Footer, Header, Home, LostAnimalList, Report, AnimalTest } from "./pages";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/report" element={<Report />} />
                <Route exact path="/animals/*" element={<Animals />} />
                <Route exact path="/lost" element={<LostAnimalList />} />
                <Route exact path="/animalti" element={<AnimalTest />} />
                <Route exact path="/*" element={<Home />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
