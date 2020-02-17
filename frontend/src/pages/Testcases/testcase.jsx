import React, { Component } from "react";
import "./testcases.css";
// import "./node_modules/bootstrap/dist/css/bootstrap.css";

class Testcase extends Component {
  getProgressClass = () => {
    let classes = "progress-bar ";
    classes =
      this.props.testcase === "pass" ? classes + "bgs" : classes + "bgd";
    return classes;
  };

  getWidth = testcase => {
    return testcase === null ? "0%" : "100%";
  };

  render() {
    return (
      <div className="tc progress">
        <div
          className={this.getProgressClass()}
          style={{ width: this.getWidth(this.props.testcase) }}
        >
          {this.props.testcase}
        </div>
      </div>
    );
  }
}

export default Testcase;
