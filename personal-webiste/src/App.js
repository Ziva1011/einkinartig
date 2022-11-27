import logo from './logo.svg';
import './App.css';
import NavMenu from "./components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DesignChallenge from "./pages/100ui";
import AboutMe from "./pages/AboutMe";
import NoPage from "./pages/NoPage";
import './stylesheets/application.sass'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavMenu/>
        <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/100ui" element={<DesignChallenge />} />
          <Route path="*" element={<NoPage />} />
        {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
