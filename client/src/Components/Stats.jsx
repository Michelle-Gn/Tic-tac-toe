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
        <div>Employees</div>
        <div>Total Records: {this.state.totalRecords}</div>
        <div>Trimmed Average: {this.state.trimmedAverage}</div>
    </div>
    )
  }
}

export default Stats;