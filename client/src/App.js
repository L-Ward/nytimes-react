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
  <Router>
    <div className="container">
      <Jumbotron />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/saved' component={Saved} />
      </Switch>
      <Footer />
    </div>
  </Router>
)

export default App;
