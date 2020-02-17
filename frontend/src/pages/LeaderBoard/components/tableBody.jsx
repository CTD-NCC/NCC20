import React, { Component } from "react";
import _ from "lodash";
import "./table.css";
class TableBody extends Component {
  constructor() {
    super();
    this.state = {};
  }
  renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  createKey = (item, column) => {
    return item._id + (column.path || column.key);
  };
  render() {
    const { data, columns, teams } = this.props;

    return (
      <tbody>
        {data.map(item => (
          <tr className={item.color} key={item._id}>
            {columns.map(column => (
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
