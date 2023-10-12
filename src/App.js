import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import CompA from "./components/CompA";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={ <About /> } />
        <Route path="/CompA" element={ <CompA /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
