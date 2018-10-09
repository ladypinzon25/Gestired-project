import React, { Component } from 'react';
import './App.css';
import Timeline from './Timeline';
import CardRecurso from './CardRecurso';
import GridRecursos from './GridRecursos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <GridRecursos/>
        <Timeline/>
      </div>
    );
  }
}

export default App;
