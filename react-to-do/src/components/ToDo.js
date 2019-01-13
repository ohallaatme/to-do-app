//step 1 - import React and React's Component class
import React, { Component } from 'react';

//step 2 - define a class that extends Component
class ToDo extends Component {
//step 3 - define a render() method on your class. This Method is required
  render() {
    return (
      <li>
        <input type="checkbox" checked={ this.props.isCompleted } />
        <span>{ this.props.description }</span>
      </li>
    );
  }
}
//step 4 - export the class, use the default keyword since it will be the only export in this file

export default ToDo;
