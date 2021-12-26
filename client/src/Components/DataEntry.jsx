import React from 'react';

var DataEntry = (props) => {

  var colors = ['lime', 'blue', 'purple', 'orange', 'yellow', 'green', 'pink', 'grey', 'red'];

  var generateColors = function (colors) {
    var index = Math.floor(Math.random() * ((colors.length - 1) - 0) + 0);
    return colors[index];
  }

  var style = {
    width: '20px',
    height: '20px',
    borderRadius: 50,
    backgroundColor: generateColors(colors)
  }

    return (
    <div className="name-salary" key={props.index}>
      <div className="name">
        <div className="icon" style={style}>
          {props.element.Name[0]}
        </div>
        <div className="name-text">
          {props.element.Name}
        </div>
      </div>
      <div className="salary">
        <div className="salary-text">
        {props.element.Salary}
        </div>
      </div>
    </div>
    )
}

export default DataEntry;