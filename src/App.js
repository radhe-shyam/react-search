import React, { Component } from 'react';
import './App.css';
import History from './History/History';
import SearchBox from './SearchBox/SearchBox';
import SearchDetails from './SearchDetails/SearchDetails';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Wiki Search</h1>
        <div className="flex-row">
          <div className="flex-large">
            <SearchBox />
            <SearchDetails />

          </div>
          <div className="flex-large">
            <History />
          </div>
        </div>
      </div>
    );
  };
}

export default App;
