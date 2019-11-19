---
Layout: default
Title: "Functional Components vs Class Components"
Date: 01-10-2019
---

## Functional Components

Functional components are basic JavaScript functions. These are typically arrow functions but can also be created with the regular function keyword.
Sometimes referred to as “dumb” or “stateless” components as they simply accept data and display them in some form; that is they are mainly responsible for rendering UI.
React lifecycle methods (for example, componentDidMount) cannot be used in functional components.
There is no render method used in functional components.
These are mainly responsible for UI and are typically presentational only (For example, a Button component).
Functional components can accept and use props.
Functional components should be favored if you do not need to make use of React state.
import React from "react";

`const Person = props => (
  <div>
    <h1>Hello, {props.name}</h1>
  </div>
);

export default Person;`

## Class Components

Class components make use of ES6 class and extend the Component class in React.
Sometimes called “smart” or “stateful” components as they tend to implement logic and state.
React lifecycle methods can be used inside class components (for example, componentDidMount).
You pass props down to class components and access them with this.props
import React, { Component } from "react";

class Person extends Component {
  constructor(props){
    super(props);
    this.state = {
      myState: true;
    }
  }
  
  render() {
    return (
      <div>
        <h1>Hello Person</h1>
      </div>
    );
  }
}

export default Person;