import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./pages/main/Main";
import MainDetail from "./pages/main/MainDetail";
import MainAddDetail from "./pages/main/MainAddDetail";
import Login from "./pages/user/Login";
import Join from "./pages/user/Join";
import Board from "./pages/Board/Board";
import BoardWrite from "./pages/Board/BoardWrite";
import Chart from "./pages/chart/Chart";
import ChartCate from "./pages/chart/ChartCate";
import ChartMonth from "./pages/chart/ChartMonth";
import ChartYear from "./pages/chart/ChartYear";
import MyPage from "./pages/user/MyPage";
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
          <Route path="/join" element={<Join />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/board" element={<Board />} />
          <Route path="/boardwrite" element={<BoardWrite />} />
          <Route path="/mainadddetail" element={<MainAddDetail />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/chartcate" element={<ChartCate />} />
          <Route path="/chartmonth" element={<ChartMonth />} />
          <Route path="/chartYear" element={<ChartYear />} />
          <Route path="/myPage" element={<MyPage />} />
        </Routes>
        <Nav />
      </div>
    </Router>
  );
};
export default App;
