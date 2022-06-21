import React from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import {Animals, Footer, Header, Home, LostAnimalList, Report, AnimalTest, Login, UpdateProfile, Dashboard, ForgotPassword, Signup} from "./pages";
import PrivateRoute from "./Router/PrivateRoute";
import {AuthProvider} from "./contexts/AuthContext";

function App() {
    return (
        <AuthProvider>
            <Header/>
            <Routes>
                <Route exact path="/report" element={
                    <PrivateRoute>
                        <Report/>
                    </PrivateRoute>
                }/>
                <Route exact path="/animals/*" element={
                    <PrivateRoute>
                        <Animals/>
                    </PrivateRoute>
                }/>
                <Route exact path="/lost" element={
                    <PrivateRoute>
                        <LostAnimalList/>
                    </PrivateRoute>
                }/>
                <Route exact path="/animalti" element={<AnimalTest/>}/>
                <Route exact path="/*" element={<Home/>}/>

                <Route exact path="/dashboard" element={<Dashboard/>}/>
                <Route exact path="/update-profile" element={
                    <PrivateRoute>
                        <UpdateProfile/>
                    </PrivateRoute>
                }/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/signup" element={<Signup/>}/>
                <Route exact path="/forgot-password" element={<ForgotPassword/>}/>
            </Routes>
            <Footer/>
        </AuthProvider>
    );
}

export default App;
