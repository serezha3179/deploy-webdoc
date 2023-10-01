import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
// import Header from './components/header/Header'
// import Footer from './components/footer/Footer'
// import Main from './components/main/Main'
import Home from "./pages/Home";
import Operator from "./pages/Orerator";
import Coordinator from "./pages/Coordinator";
import Administrator from "./pages/Administrator";
import MainAdministrator from "./pages/MainAdministrator";
// import Login from "./pages/login/Login";
import CreateAccount from "./pages/CreateAccount";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/operator" element={<Operator />} />
          <Route path="/coordinator" element={<Coordinator />} />
          <Route path="/administrator" element={<Administrator />} />
          <Route path="/mainadministrator" element={<MainAdministrator />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/createaccount" element={<CreateAccount />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
