import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hello from './Hello';
import TodoList from './TodoList';
import EditTodo from './EditTodo';
import CreateTodo from './CreateTodo';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "React",
      users: [{id: 1, first_name: "Sebastian", last_name: "Eschweiler", email: "abc@mail.com"}],
      loaded: true
    };

  }
  /*componentDidMount() {
    fetch(`https://my-json-server.typicode.com/Goldenstriker/schoolappdb/student`)
      .then(res => res.json())
      .then(result => { this.setState({ loaded: true }); console.log(this.state.loaded); console.log(result); this.setState({ users: result }); })
  }*/
  todolist = [
    { task: "ABC", id: 1 },
    { task: "DEF", id: 2 },
    { task: "GHI", id: 3 },
  ]
  initialtodolist = {
    task: "",
    id: 0
  };
  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
                <img src="https://cdn.jsdelivr.net/gh/Goldenstriker/React_CRUD_APP@master/logo.png" width="30" height="30" alt="CodingTheSmartWay.com" />
              </a>
              <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
              <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">Todos</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Todo</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <br />
            <TodoList users={this.state.users} loaded={this.state.loaded} />
            <Route path="/" exact component={TodoList} />
            <Route path="/edit/:id" component={EditTodo} />
            <Route path="/create" component={CreateTodo} />

          </div>
        </Router>
        <ul>
          {this.state.loaded ? this.state.users.map((u) => {
            <li key={u.id}>{u.id}</li>
          }) : null}
        </ul>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
