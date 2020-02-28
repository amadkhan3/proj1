import React from 'react';
import './App.css';
import Home from './components/Home.js';
import Spin from './components/Spin.js';
import Winner from './components/Winner.js';
import { Route, BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/spin" component={Spin} />
              <Route path="/Winner" component={Winner} />
            </div>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
