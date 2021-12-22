import React from 'react';
import axios from 'axios';

class App extends React.components {
  constructor(props) {
    super(props);
    this.state = {
      data: [];
    }
  }

  getData() {
    axios.get('/entries').then((results) => {
      this.setState({
        data: results.data;
      })
    })
  }
}