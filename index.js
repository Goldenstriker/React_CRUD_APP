import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hello from './Hello';
import TodoList from './TodoList';
import EditTodo from './EditTodo';
import CreateTodo from './CreateTodo';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Router>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <Route path="/" exact component={TodoList} />
        <Route path="/edit" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
