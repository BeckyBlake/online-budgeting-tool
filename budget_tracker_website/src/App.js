import React from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Contact from './Pages/Financial Literacy';
import About from './Pages/Budgets';
import Login from './Pages/Login/Login';
import useToken from './useToken';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import Liquid_Lizard from './assets/liquid_lizard.png';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  

  return (
    <>
      <div className="container">
        <a href='/'>
          <img alt="" src={Liquid_Lizard} width="130" style={{
            marginTop: "10px", 
            marginLeft: "10px", 
            // backgroundColor: "red",
            display: "inline-block",
            position: "relative",
            zIndex: "1",
            padding: "2em",
            margin: "-2em"} }></img>
        </a>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <NavigationBar></NavigationBar>

    </>
  );
}

export default App;
