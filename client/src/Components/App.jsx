import React from 'react';
import axios from 'axios';
import DataScroll from './DataScroll.jsx';
import LabelBar from './LabelBar.jsx';
import Add from './Add.jsx';
import Download from './Download.jsx';
import Stats from './Stats.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div id="app-container">
        <div id="picture">
            <img src="Tracer.png"></img>
        </div>
        <div id="sub-container">
          <div id="stats-buttons">
            <Stats/>
            <Download/>
            <Add/>
          </div>
            <LabelBar/>
            <DataScroll/>
        </div>
      </div>
    )
  }
}

export default App;