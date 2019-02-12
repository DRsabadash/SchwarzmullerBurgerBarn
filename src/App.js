import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <p>Yep. it's a react app...</p>
        <Person name="David" age ="25"/>
        <Person name="Kit" age ="30?">I Like to code</Person>
        <Person name="Brian" age ="52"/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Reacted'))
  }
}

export default App;
