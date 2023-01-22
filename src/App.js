import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../src/components/home/Home";
import About from "../src/components/about/About";
import Service from "../src/components/services/Service";
import Contact from "../src/components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
