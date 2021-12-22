import React from 'react';
import axios from 'axios';

class DataScroll extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      last: 'null',
      prev: 'null'
    };

    this.getData = this.getData.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getData(this.state.last);
  }

  getData(lastID) {
    this.setState({
      loading: true
    });

    axios.get(`/entries/${lastID}`).then((results) => {
      this.setState({
        data: [...this.state.data, ...results.data]
      });
      this.setState({
        loading: false
      });
      this.setState({
        last: this.state.data[this.state.data.length - 1]._id
      })
    });
  }

  handleClick(lastID) {
    this.getData(lastID);
  }

  render() {
    return(
    <div>
      {this.state.data.map((element, index) => (
        <div key={index}>
          {element.Name}
          {element.Salary}
        </div>
        ))}
    <button onClick={() => {this.handleClick(this.state.last)}}>Get Next Five</button>
    </div>
    )
  }

}

export default DataScroll;