import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
    
  }
  componentDidMount(){
    axios
      .get(`http://localhost:3005/students?students?class=${this.props.match.params.class}`)
      .then(results => {this.setState({students: results.data})})
      .catch(error => console.log(error))
  }
  render() {
    const students = this.state.students.map((e,i ) => (
      <Link to={`/student/${e.id}`} key={i} ><h3>{e.first_name} {e.last_name}</h3></Link>

    ))


    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}
      </div>
    )
  }
}