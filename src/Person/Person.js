import React from 'react';
import cssClasses from './Person.css';

const person = (props) => {
    return (

    <div className = {cssClasses.Person}>
        <p onClick={props.click}> I'm {props.name} and am {props.age}? years old.</p>
        <p>{props.children}</p>
        <input type="text" value = {props.name} onChange={props.changed} />
    </div>
    )
};

export default person;