import React, { Component } from "react";
import { Redirect } from "react-router";
import "./submissions.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

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
        { SrNo: 8, time: "34", ss: "38", status: 90, response: "-" },
        { SrNo: 9, time: "34", ss: "38", status: 90, response: "-" },
        { SrNo: 10, time: "34", ss: "38", status: 90, response: "-" },
        { SrNo: 11, time: "34", ss: "38", status: 90, response: "-" },
        { SrNo: 12, time: "34", ss: "38", status: 90, response: "-" }
      ],
      redirect: false
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

  handleClick = () => {
    this.setState({
      redirect: true
    });
  };

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
      const newTo = {
        pathname: "/coding",
        param1: SrNo
      };
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
              <div
                className="progress"
                style={{ height: "3.5vh", width: "17vw" }}
              >
                <div
                  className={"progress-bar bg-" + rate}
                  role="progressbar"
                  style={{ width: status + "%" }}
                  aria-valuenow={status}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span className="show">{status}%</span>
                </div>
              </div>
            </center>
          </td>
          <td>
            <center>
              <Link to={newTo}>
                <button className="butView" href="{response}">
                  View
                </button>
              </Link>
            </center>
          </td>
        </tr>
      );
    });
  }

  render() {
    // if (this.state.redirect === true) {
    //   this.setState({
    //     redirect: false
    //   });
    //   return <Redirect push to="/coding" />;
    // }
    return (
      
      <div className="tablediv" id="style-3">
        <table
          id="students"
          className="table table-striped table-dark table-hover"
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

export default Table;
