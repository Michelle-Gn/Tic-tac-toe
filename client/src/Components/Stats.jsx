import React from 'react';
import axios from 'axios';

class Stats extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      totalRecords: '',
      average: ''
    }
    this.getRecords = this.getRecords.bind(this);
    this.getAverage = this.getAverage.bind(this);
  }

  componentDidMount() {
    this.getRecords();
    this.getAverage();
  }

  getRecords() {
    axios.get('/count').then((result) => {
      this.setState({
        totalRecords: result.data.toLocaleString()
      })
    }).catch((err) => {
      console.log(err)
    })
  }

  getAverage() {
    axios.get('/average').then((result) => {
      this.setState({
        average: Math.round(result.data[0].AverageValue).toLocaleString()
      })
    }).catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
    <div id="stats">
        <div>
          <h4>Employees</h4>
        </div>
        <div>Total Records: {this.state.totalRecords}</div>
        <div>Average: {this.state.average}</div>
    </div>
    )
  }
}

export default Stats;