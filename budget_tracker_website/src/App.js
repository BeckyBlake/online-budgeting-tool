// import './App.css';
// import React from 'react';
// import './App.css';
// import Dashboard from './Components/Dashboard/Dashboard';
// import Login from './Components/Login/Login';
// import Preferences from './Components/Preferences/Preferences';
// import useToken from './Components/App/useToken';


//  // eslint-disable-next-line
// // import { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
 // eslint-disable-next-line
// import { useHistory } from 'react-router-dom';

// import {Home} from './Components/Home';
// import {About} from './Components/About';
// import {Project} from './Components/Project';


import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Login from './Pages/Login/Login';
import useToken from './useToken';
import NavBar from './Components/NavBar/index';
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
        <img alt="" src={Liquid_Lizard} width="130"></img>
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
