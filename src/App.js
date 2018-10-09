import React, { Component } from 'react';
import './App.css';
import Timeline from './Timeline';
import CardRecurso from './CardRecurso';
import Proyecto from './Proyecto';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Proyecto id={1}/>
        <Timeline/>
      </div>
    );
  }
}

export default App;
