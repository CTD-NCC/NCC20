import React, { Component } from "react";

class STableHeader extends Component {
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th key={column.path || column.key}>{column.label}</th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default STableHeader;
