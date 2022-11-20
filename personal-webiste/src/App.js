import logo from './logo.svg';
import './App.css';
import NavMenu from "./components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import {Routes} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <>
        <NavMenu/>
        <Routes>
          
        </Routes>
      </>
    </div>
  );
}

export default App;
