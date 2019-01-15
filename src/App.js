import React, { Component } from 'react';
import Images from './Images'
import Table from './Table'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Images />
        <Table />
      </div>
    );
  }
}

export default App;
