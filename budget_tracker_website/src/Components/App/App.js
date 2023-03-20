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
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Preferences from '../Preferences/Preferences';
import useToken from './useToken';


function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  

  return (
    // <Router>
    //   <div className='bg'>
    //       <div className='nav'>
    //           <h1> Budget Tracker App </h1>

    //           <a class="navLi" href="/home">Home</a>
    //           <a class="navLi" href="/about">Budgets</a>
    //           {/* <a class="navLi" href="/">Budgets</a> */}
          
    //           {/* <button class="navLi">Home</button>
    //           <button class="navLi">About</button>
    //           <button class="navLi">Projects</button> */}
    //       </div>
    //       <div className='content'>
    //         <Switch>
    //           <Route path="/home">
    //             <Home />
    //           </Route>
    //           <Route path="/about">
    //             <About />
    //           </Route>
    //           <Route path="/project">
    //             <Project />
    //           </Route>
    //         </Switch>
    //       </div>
    //     </div>
    // </Router>
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
