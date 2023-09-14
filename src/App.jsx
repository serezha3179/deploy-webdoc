import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import'./App.css'
// import Header from './components/header/Header'
// import Footer from './components/footer/Footer'
// import Main from './components/main/Main'
import Home from "./pages/Home";
import Operator from "./pages/Orerator";
import Coordinator from "./pages/Coordinator";
import Administrator from "./pages/Administrator";
import MainAdministrator from "./pages/MainAdministrator";

function App() {

  return (
     <>
     <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/operator" element={<Operator/>}/>
      <Route path="/coordinator" element={<Coordinator/>}/>
      <Route path="/administrator" element={<Administrator/>}/>
      <Route path="/mainadministrator" element={<MainAdministrator/>}/>
      </Routes>
      </Router>
     </>
  )
}

export default App
