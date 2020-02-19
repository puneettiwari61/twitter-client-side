import React from 'react';
import Aside from './components/Aside'
import Nav from './components/nav/Nav'
import Main from './components/main/Main'
import Notifications from './components/nav/Notifications'
import Explore from './components/nav/Explore'
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <header class="header flex">
    <Nav />
    <Route path='/' exact><Main /></Route>
    <Route path='/explore' exact>< Explore/></Route>
    <Route path='/notifications' exact><Notifications /></Route>

    <Aside />
    </header>
    </Router>
    </>
    );
}

export default App;
