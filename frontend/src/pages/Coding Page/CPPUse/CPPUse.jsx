import React, { Component } from "react";
import "./CPPUse.css";
import { connect } from "react-redux";

class CPPUse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classC: "orange",
      classCpp: "black"
    };
  }

  handleClickC = (ext)=> {
    this.props.updateExt(ext);
    this.setState({
      classC: "orange",
      classCpp: "black"
    });
  }

  handleClickCpp = (ext) => {
    this.props.updateExt(ext);
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
              onClick={()=> this.handleClickC("c")}
            >
              <a>C</a>
            </li>
          </div>
          <div className="CppDiv">
            <li
              className={`CppLang ${this.state.classCpp}`}
              onClick={() => this.handleClickCpp("cpp")}
            >
              <a>C++</a>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    ext : state.coding.ext
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateExt: ext => {
      dispatch({
        type: "UPDATE_EXT",
        ext: ext
      });
    },
  }
}
  export default connect(mapStateToProps, mapDispatchToProps)(CPPUse);