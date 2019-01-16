//step 1 - import React and React's Component class
import React, { Component } from 'react';

//step 2 - define a class that extends Component
class ToDo extends Component {
//step 3 - define a render() method on your class. This Method is required


deleteToDo(e) {
   e.preventDefault()
   this.props.deleteToDo(this.props.description);

 }
   render() {
     return (
       <div className="wrapper">

       <button className="deleteToDo" onClick = {(e) =>
           this.deleteToDo(e)}>Delete</button>
           {() => this.deleteToDo(this.props.description)}

       <li>
         <input type="checkbox" checked={ this.props.isCompleted }
 onChange={ this.props.toggleComplete } />
         <span>{ this.props.description }</span>
       </li>
       </div>
     );
   }
 }
//step 4 - export the class, use the default keyword since it will be the only export in this file

export default ToDo;
