import React, { Component } from "react";

class STableHeader extends Component {
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
              column.label !== "Question" ?
                  <th key={column.path || column.key}>{column.label}</th>
                  : <th ><select className={"custom-select"} style={{width :"9vw"}}id = "question">
                  <option value={"1"}>Question 1</option>
                  <option value={"2"}>Question 2</option>
                  <option value={"3"}>Question 3</option>
                  <option value={"4"}>Question 4</option>
                  <option value={"5"}>Question 5</option>
                  <option value={"6"}>Question 6</option>
                  </select></th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default STableHeader;
