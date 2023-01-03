// General Imports
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import MainPage from './pages/MainPage/MainPage';

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";



function App() {
  const [searchInput, setSearchInput] = useState("")

  function getSearchInput(searchInput) {
    console.log(searchInput)
    setSearchInput(searchInput) 
}

  return (
    <div>
      <Navbar getSearchInput={getSearchInput}/>
      <Routes>
        {/* <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        /> */}
        <Route path="/" element={<LandingPage searchInput={searchInput}/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
