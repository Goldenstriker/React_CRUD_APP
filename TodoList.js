import React, { Component } from 'react';

export default class TodoList extends Component {
  render() {
    return (
      <React.Fragment>
      <ul>
      {this.props.users.map(u=>{
        <li key={u}>u</li>
      })}
      </ul>
      <h1>TodlIst</h1>
      </React.Fragment>

    );

  }

}