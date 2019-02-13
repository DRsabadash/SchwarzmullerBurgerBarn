import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {id : 45646, name : 'David', age: 25},
      {id : 88945, name : 'Kit', age: 30},
      {id : 65445, name : 'Brian', age: 47}
    ],
    showPersons : false
  }

deletePersonHandler = (personIndex) => {
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons:persons});
}
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons : persons});
    console.log(this.state.persons);
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click = {() => this.deletePersonHandler(index)}
            name = {person.name}
            age = {person.age} 
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
      </div> 
      );
      style.backgroundColor= 'red';


    }
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    return (
        <div className="App">
          <h1>React App</h1>
          <p className= {classes.join(' ')}>Yep. it's a react app...</p>
          <button
          style={style}
          onClick={this.togglePersonsHandler}>Change Name</button>
          {persons}
        </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Reacted'))
  }
}

export default App;
