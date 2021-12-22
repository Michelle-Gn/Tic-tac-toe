import React from 'react';
import axios from 'axios';

class DataScroll extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      last: 'null',
      prevY: 0
    };

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData(this.state.last);

    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    };

    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );

    this.observer.observe(this.loadingRef);

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
    // Aditional css
    const loadingCSS = {
      height: "100px",
      margin: "30px"
    }

    return(
    <div className="container">
      <div style={{ minHeight: "75px"}}>
      {this.state.data.map((element, index) => (
        <div key={index}>
          {element.Name}
          {element.Salary}
        </div>
        ))}
      </div>
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