// NPM dependencies
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// File dependencies
import './App.css';
import Home from './pages/Home'
import Saved from './pages/Saved'
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer'

const App = () => (
  <div className="container">
    <Jumbotron />
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/saved' component={Saved} />
      </Switch>
    </Router>
    <Footer />
  </div>
)

export default App;
