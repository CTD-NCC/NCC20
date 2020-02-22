import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

class STableBody extends Component {
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
    const { data, columns, submissions } = this.props;

    return (
      <tbody>
        {data.map(item => (
          <tr style={{ height: "6vh" }} className={item.color} key={item._id}>
            {columns.map(column => (
                column.label !== "Success Rate" ?
              <td key={this.createKey(item, column)}>
                {this.renderCell(item, column)}
              </td>:
                <td>
                  <div className="progress position-relative" style={{ height: "3.8vh"}}>
                    <div className="progress-bar" style={{width: `${this.renderCell(item, column)}`, color: 'black', backgroundColor: "#00aaee"}}>
                      <span className="justify-content-center d-flex position-absolute w-100 ">{this.renderCell(item, column)}</span>
                    </div>
                  </div>
                </td>
            ))}
            <Link to="/coding">
              <button
                className="butView"
                style={{ marginLeft: "-25.5vw", marginTop: "1vh" }}
              >
                View
              </button>
            </Link>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default STableBody;
