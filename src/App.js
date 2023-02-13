import { Route, Router, Routes } from "react-router";
import Header from "./components/Header";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/main" component={Main} />
        <Route path="/board" component={Board} />
        <Route path="/chart" component={Chart} />
        <Route path="/login" component={Login} />
        <Route path="/mypage" component={Mypage} />
        <Route path="/singup" component={Singup} />
      </Routes>
      <Nav />
    </Router>
  );
}

export default App;
