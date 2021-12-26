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
      data: [],
      loading: false,
      last: 'null',
      prevY: 0
    };

    this.getData = this.getData.bind(this);
    this.handleObserver = this.handleObserver.bind(this);
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

  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevY > y) {
      this.getData(this.state.last);
    }
    this.setState({ prevY: y });
  }

  render() {
    return(
      <div id="app-container">
        <div id="picture">
            <img src="Tracer.png"></img>
        </div>
        <div id="sub-container">
          <div id="stats-buttons">
            <div id="stats-bar">
            <Stats/>
            </div>
            <div id="functional-buttons">
              <div id="download">
              <Download/>
              </div>
              <div id="add">
              <Add getData={this.getData}/>
              </div>
            </div>
          </div>
            <LabelBar/>
            <DataScroll state={this.state}
            getData={this.getData}
            handleObserver={this.handleObserver}/>
        </div>
      </div>
    )
  }
}

export default App;