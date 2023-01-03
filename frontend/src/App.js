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
import VideoDisplay from './pages/VideoDisplay/VideoDisplay';

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";




function App() {
  const [searchInput, setSearchInput] = useState("")
  const [videoId, setVideoId] = useState("")

  function getSearchInput(searchInput) {
    console.log(searchInput)
    setSearchInput(searchInput) 
}

  function getVideoId(videoId) {
    console.log(videoId)
    setVideoId(videoId)
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
        <Route path="/" element={<MainPage />} />
        <Route path="/searchresults" element={<LandingPage searchInput={searchInput} getVideoId={getVideoId}/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/videodisplay" element={<VideoDisplay getVideoId={getVideoId} videoId={videoId} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
