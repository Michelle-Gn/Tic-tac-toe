import React from 'react';
import axios from 'axios';

class App extends React.components {
  constructor(props) {
    super(props);
    this.state = {
      data: [];
      last: 'null';
    }
  }

  getData() {
    axios.get(`/entries/${this.state.last}`).then((results) => {
      this.setState({
        data: results.data;
      })
    })
  }
}