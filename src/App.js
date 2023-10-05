import React from "react";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import { BrowserRouter,Route,Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={ <About /> } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
