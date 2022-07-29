import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
