import React from 'react';
import axios from 'axios';
import DataEntry from './DataEntry.jsx';

class DataScroll extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };

  }

  componentDidMount() {
    this.props.getData(this.props.state.last);

    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    };

    this.observer = new IntersectionObserver(
      this.props.handleObserver.bind(this),
      options
    );

    this.observer.observe(this.loadingRef);

  }

  render() {
    // Aditional css
    const loadingCSS = {
      height: "100px",
      margin: "30px"
    }

    // Change loading icon behavior
    const loadingTextCSS = { display: this.state.loading ? "block" : "none"};

    return(
    <div id="data-container">
      {this.props.state.data.map((element, index) => (
        <DataEntry index={index} element={element}/>
        ))}
      <div
        ref={loadingRef => (this.loadingRef = loadingRef)}
        style={loadingCSS}
      >
        <span style={loadingTextCSS}>Loading...</span>
      </div>
    </div>
    );
  }

}

export default DataScroll;