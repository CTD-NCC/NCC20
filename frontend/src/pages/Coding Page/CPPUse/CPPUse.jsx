import React, { Component } from "react";
import "./CPPUse.css";
import { connect } from "react-redux";

class CPPUse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classC: "orange",
      classCpp: "black",
      Python : "black"
    };
  }

  handleClickC = (ext)=> {
    this.props.updateExt(ext);
    this.setState({
      classC: "orange",
      classCpp: "black",
      Python :"black"
    });
  }

  handleClickCpp = (ext) => {
    this.props.updateExt(ext);
    this.setState({
      classC: "black",
      classCpp: "orange",
      Python : "black"
    });
  }

  handleClickPython = (ext) => {
    this.props.updateExt(ext);
    this.setState({
      classC: "black",
      classCpp: "black",
      Python : "orange"
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
          <div className="Python" style={{marginTop : "-.5vh"}}>
            <li
              className={`CppLang ${this.state.Python}`}
              onClick={() => this.handleClickPython("py")}
            >
              <a>Python</a>
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