import React, { Component } from 'react';
import './App.css';
import MainContainer from './containers/MainContainer'
import Home from './Home'
import About from './About'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <>
            <nav className="nav-bar">
              <Link to="/">Home</Link>
              <br/>
              <Link to="/design">Design</Link>
              <br/>
              <Link to="/about">About Us</Link>
            </nav>
            <Route path="/" exact component={Home} />
            <Route path="/design" component={MainContainer} />
            <Route path="/about" component={About} />
          </>
        </Router>

      </div>
    );
  }
}

export default App;
