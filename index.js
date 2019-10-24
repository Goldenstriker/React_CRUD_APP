import React, { Component, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hello from "./Hello";
import TodoList from "./TodoList";
import EditTodo from "./EditTodo";
import CreateTodo from "./CreateTodo";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.png";
import * as tf from "@tensorflow/tfjs";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "React"
    };
    this.predictModel();
  }

  todolist = [
    { task: "ABC", id: 1 },
    { task: "DEF", id: 2 },
    { task: "GHI", id: 3 }
  ];
  initialtodolist = {
    task: "",
    id: 0
  };
  predictModel() {
    this.model = tf.sequential();
    this.model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

    this.model.compile({ loss: "meanSquaredError", optimizer: "sgd" });

    // Generate some synthetic data for training.
    const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
    const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

    // Train the model using the data.
    this.model.fit(xs, ys, { epochs: 10000 }).then(() => {
      // Use the model to do inference on a data point the model hasn't seen before:
      this.model.predict(tf.tensor2d([6], [1, 1])).print();
      // Open the browser devtools to see the output
    });
  }
  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a
                className="navbar-brand"
                href="https://codingthesmartway.com"
                target="_blank"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/Goldenstriker/React_CRUD_APP@master/logo.png"
                  width="30"
                  height="30"
                  alt="CodingTheSmartWay.com"
                />
              </a>
              <Link to="/" className="navbar-brand">
                MERN-Stack Todo App
              </Link>
              <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">
                      Todos
                    </Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/create" className="nav-link">
                      Create Todo
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <br />
            <Route path="/" exact component={TodoList} />
            <Route path="/edit/:id" component={EditTodo} />
            <Route
              path="/create"
              render={props => <CreateTodo {...props} data="ABC" />}
            />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
