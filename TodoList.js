import React, { Component } from 'react';

export default class TodoList extends Component {
  render() {
    
    return (
      <React.Fragment>
      <ul>
      { this.props.loaded? this.props.users.map((u)=>{
        <li key={u.id}>{u.id}</li>
      }):null}
      </ul>
      <h1>TodlIst</h1>
      </React.Fragment>

    );

  }

}