import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div className="app">
      {<Search/>}
      </div>
    );
  }
}

export default App;