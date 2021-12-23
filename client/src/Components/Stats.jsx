import React from 'react';
import axios from 'axios';

class Stats extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      totalRecords: 1,
      trimmedAverage: 2
    }
  }

  render() {
    return (
    <div id="stats">
      <h2>Employees</h2>
      <div>{this.state.totalRecords}</div>
      <div>{this.state.trimmedAverage}</div>
    </div>
    )
  }
}

export default Stats;