import React from 'react';

var DataEntry = (props) => {
    return (
    <div id="name-salary" key={props.index}>
      <div className="name">
        <div className="icon">
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