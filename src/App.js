import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import Main from "./pages/main/Main";
import Login from "./pages/user/Login";
import Chart from "./pages/chart/Chart";
import Board from "./pages/Board/Board";

const App = () => {
  return (
    <Router>
      <div className="wrap">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/board" element={<Board />} />
        </Routes>
        <Nav />
      </div>
    </Router>
  );
};

export default App;
