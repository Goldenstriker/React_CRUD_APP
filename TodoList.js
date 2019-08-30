import React, { Component } from 'react';
import Loader from './Loader';
import axios from 'axios';
import { Button } from 'semantic-ui-react'
export default class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      name: "React",
      users: [],
      loaded: false
    };

  }
  componentDidMount() {
    axios(`https://my-json-server.typicode.com/Goldenstriker/schoolappdb/student`)
      .then(result => {console.log(result.data);this.setState({ loaded: true }); this.setState({ users: result.data });})
      .catch(error=>{console.log(error)});
      
  }
  render() {
    
    return (
      <React.Fragment>
      {!this.state.loaded?<Loader/>:null}
      <ul>
      { this.state.loaded? this.state.users.map((u)=>(
        <li key={u.id}>{u.first_name}</li>
      )):null}
      </ul>
      <Button>Click Here</Button>
      </React.Fragment>

    );

  }

}