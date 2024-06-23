import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";

function App() {
    const token = localStorage.getItem('token');
    const isAuthenticated = !!token;

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <body >
            <Navbar/>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            ></link>
        </body>
    );
}

export default App;
