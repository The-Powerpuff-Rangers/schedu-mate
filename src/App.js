import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.js";
import Landing from "./pages/landing/Landing.js";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Details from "./pages/details/details";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/details" exact element={<Details />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
