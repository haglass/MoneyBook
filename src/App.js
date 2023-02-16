import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Nav from "./components/Nav";
import Main from "./pages/main/Main";
import MainDetail from "./pages/main/MainDetail";
import MainAddDetail from "./pages/main/MainAddDetail";
import Login from "./pages/user/Login";
import MyPage from "./pages/user/MyPage";
import SignUp from "./pages/user/SignUp";
import Chart from "./pages/chart/Chart";
import ChartMonth from "./pages/chart/ChartMonth";
import Board from "./pages/Board/Board";
import ChartCate from "./pages/chart/ChartCate";
import MainPage from "./pages/main/MainPage";

const App = () => {
  return (
    <Router>
      <div className="wrap">

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/main" element={<Main />} />
          <Route path="/maindetail" element={<MainDetail />} />
          <Route path="/mainadddetail" element={<MainAddDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/chartMonth" element={<ChartMonth />} />
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
