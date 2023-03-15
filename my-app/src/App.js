import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Task from "./pages/Task";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/pages/Home" element={<Home />} />
          <Route path="/pages/Task" element={<Task />} />
          <Route path="/pages/About" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
