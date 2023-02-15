import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import Main from "./pages/main/Main";
import Login from "./pages/user/Login";
import SignUp from "./pages/user/SignUp";
import Chart from "./pages/chart/Chart";
import Board from "./pages/Board/Board";
import MainAddDetail from "./pages/main/MainAddDetail";
import ChartCate from "./pages/chart/ChartCate";

const App = () => {
  return (
    <Router>
      <div className="wrap">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/board" element={<Board />} />
          <Route path="/mainadddetail" element={<MainAddDetail />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/chartcate" element={<ChartCate />} />
        </Routes>
        <Nav />
      </div>
    </Router>
  );
};

export default App;
