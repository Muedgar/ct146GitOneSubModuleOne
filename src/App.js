import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import PageOneOneDashboard from "./components/pageOneDashboard/pageOneOne/PageOneOneDashboard"
import PageOneThreeDashboard from "./components/pageOneDashboard/pageOneThree/PageOneThreeDashboard";
import PageOneTwoDashboard from "./components/pageOneDashboard/pageOneTwo/PageOneTwoDashboard";
import PageTwoDashboard from "./components/pageTwoDashboard/PageTwoDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/requestChangeOfInsurance" element={<PageOneOneDashboard/>} />
        <Route path="/ejoHeza" element={<PageOneTwoDashboard/>} />
        <Route path="/education" element={<PageOneThreeDashboard/>} />
        <Route path="/requestForm" element={<PageTwoDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
