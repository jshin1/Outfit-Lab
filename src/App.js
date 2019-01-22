import React, { Component } from 'react';
import './App.css';
import MainContainer from './containers/MainContainer'
import Home from './Home'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const About = props => <h1>About</h1>

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/design">Design</Link>
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
