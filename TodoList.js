import React, { Component } from 'react';
import Loader from './Loader';
import axios from 'axios';
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
    fetch(`https://my-json-server.typicode.com/Goldenstriker/schoolappdb/student`)
      .then(res => res.json())
      .then(result => { this.setState({ loaded: true }); this.setState({ users: result }); });
      axios.get(`http://pwwipro.wiprosupport.com/sites/POC/RESTAPI_SP2013/_api/web/lists/GetByTitle('EmployeeInfo')/items?$select=ID,Name,Designation,Email,DOB,Gender,State/Title,State/Id&$expand=State&$filter=(State gt 0)`).then(result =>console.log( result.json()));
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
      <h1>TodlIst</h1>
      </React.Fragment>

    );

  }

}