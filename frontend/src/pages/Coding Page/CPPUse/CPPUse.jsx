import React, { Component } from "react";
import "./CPPUse.css";

class CPPUse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classC: "orange",
      classCpp: "black"
    };
  }

  handleClickC() {
    this.setState({
      classC: "orange",
      classCpp: "black"
    });
  }

  handleClickCpp() {
    this.setState({
      classC: "black",
      classCpp: "orange"
    });
  }

  render() {
    return (
      <div className="CPPQuestion">
        <ul className="CPPQuestionLinks">
          <div className="CDiv">
            <li
              className={`CLang ${this.state.classC}`}
              onClick={this.handleClickC.bind(this)}
            >
              <a>C</a>
            </li>
          </div>
          <div className="CppDiv">
            <li
              className={`CppLang ${this.state.classCpp}`}
              onClick={this.handleClickCpp.bind(this)}
            >
              <a>C++</a>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}

export default CPPUse;
