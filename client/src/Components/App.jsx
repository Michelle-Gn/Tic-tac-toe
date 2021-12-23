import React from 'react';
import axios from 'axios';
import DataScroll from './DataScroll.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <div>Tic-tac-toe</div>
        <DataScroll/>
      </div>
    )
  }
}

export default App;