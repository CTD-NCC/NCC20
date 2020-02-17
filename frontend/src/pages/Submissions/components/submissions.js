import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { SrNo: 1, time: "10", ss: "30", status: 15, response: "-" },
        { SrNo: 2, time: "15", ss: "20", status: 50, response: "-" },
        { SrNo: 3, time: "29", ss: "32", status: 20, response: "-" },
        { SrNo: 4, time: "32", ss: "42", status: 30, response: "-" },
        { SrNo: 5, time: "15", ss: "51", status: 50, response: "-" },
        { SrNo: 6, time: "23", ss: "32", status: 70, response: "-" },
        { SrNo: 7, time: "12", ss: "35", status: 80, response: "-" },
        { SrNo: 8, time: "34", ss: "38", status: 90, response: "-" }
      ]
    };
  }

  renderTableHeader() {
    let header = Object.keys(this.state.students[0]);
    return header.map((key, index) => {
      if (key !== "ss") {
        if (key === "SrNo") {
          return (
            <th key={index}>
              <center>SR. NO.</center>
            </th>
          );
        } else {
          return (
            <th key={index}>
              <center>{key.toUpperCase()}</center>
            </th>
          );
        }
      } else {
        return null;
      }
    });
  }

  renderTableData() {
    return this.state.students.map((student, index) => {
      const { SrNo, time, ss, status } = student; //destructuring
      let rate = "";
      if (status <= 33) {
        rate = "danger";
      } else if (status > 33 && status <= 66) {
        rate = "warning";
      } else {
        rate = "success";
      }
      return (
        <tr key={SrNo}>
          <td>
            <center>{SrNo}</center>
          </td>
          <td>
            <center>
              {time}:{ss}
            </center>
          </td>
          <td>
            <center>
              <div className="progress">
                <div
                  className={"progress-bar progress-bar-striped bg-" + rate}
                  role="progressbar"
                  style={{ width: status + "%" }}
                  aria-valuenow={status}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {status}%
                </div>
              </div>
            </center>
          </td>
          <td>
            <center>
              <button className="btn btn-primary" href="{response}">
                View
              </button>
            </center>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table
          id="students"
          className="table table-striped table-primary"
          style={{ marginTop: "10vh" }}
        >
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

//ReactDOM.render(<Table />, document.getElementById('root'));

export default Table;
