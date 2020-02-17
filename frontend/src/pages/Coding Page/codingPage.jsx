import React, { Component } from "react";
import { Redirect } from "react-router";
import TabBar from "./tabBar";
import CPPUse from "./CPPUse/CPPUse";
import Title from "../title";
import Console from "./console";
import "codemirror/lib/codemirror.js";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/clike/clike";
import "codemirror/addon/edit/closebrackets.js";
import Question from "../../mainComponents/Questions";
import { connect } from "react-redux";

class CodingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      renderConsole: false,
      value: ""
    };
    let fileReader;
    this.console = React.createRef();
  }

  componentDidUpdate() {
    if (this.state.renderConsole === true)
      this.console.current.scrollIntoView({ behavior: "smooth" });
  }

  passValue(val) {
    this.props.handlePassedValue(val);
    this.setState({
      renderConsole: false
    });
  }

  handleClick = () => {
     this.props.resetTestcase();
    this.setState({
      redirect: true
    });
    this.setState({ renderConsole: false });
  };

  handleConsole = () => {
    this.setState({
      renderConsole: true
    });
  };
  handleFileRead = e => {
    const content = this.fileReader.result;
    console.log(content);
    this.setState({
      value: content
    });
  };
  handleChange = file => {
    this.fileReader = new FileReader();
    this.fileReader.onloadend = this.handleFileRead;
    this.fileReader.readAsText(file);
  };

  loadBuffer = () => {
    this.setState({
      value: this.props.lastSubmission
    });
  };

  codeChange = value => {
    this.props.changeLastSubmission(value);
  };

  render() {
    if (this.state.redirect === true) {
      return <Redirect push to="/testcases" />;
    }
    let options = {
      lineNumbers: true,
      theme: "material",
      mode: "text/x-c++src",
      mode: "text/x-csrc",
      styleActiveLine: true,
      autoCloseBrackets: true,
      matchBrackets: true
    };
    return (
      <div className="col-sm-12">
        <div
          className="row"
          style={{
            height: "93vh",
            display: "flex",
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          <TabBar
            passValue={this.passValue.bind(this)}
            class1={this.props.class1}
            class2={this.props.class2}
            class3={this.props.class3}
            class4={this.props.class4}
            class5={this.props.class5}
            class6={this.props.class6}
            class7={this.props.class7}
            class8={this.props.class8}
          />
          <div className="mainTab scroller" id="style-1">
            <div
              className="questionArea scroller p-3"
              style={{
                height: "60vh",
                width: "79vw",
                background: "rgba(8, 8, 15, 0.8)",
                color: "white",
                fontSize: "2.3vh",
                borderRadius: "5px",
                overflow: "auto"
              }}
            >
              {Question.map((question, key) => {
                if (this.props.questionNumber === question.key) {
                  return question.questionName;
                }
              })}
            </div>
            <div
              style={{
                height: "69vh",
                width: "79vw",
                marginTop: "2vh",
                backgroundColor: "black",
                display: "block",
                justifyContent: "center",
                alignContent: "center",
                borderRadius: "5px"
              }}
            >
              <span style={{ display: "flex" }}>
                <CPPUse />
                <span style={{ marginLeft: "40vw" }}>
                  <input
                    type="file"
                    id="file"
                    onChange={e => this.handleChange(e.target.files[0])}
                    accept=".cpp"
                  />
                  <label for="file" style={{ marginTop: "1vh" }}>
                    Choose file
                  </label>
                  <button
                    className="btn btn-dark"
                    style={{
                      marginBottom: "1vh",
                      outline: "none",
                      border: "none",
                      marginTop: "0.2vh",
                      marginLeft: "1vw",
                      marginRight: "1vw",
                      width: "10vw"
                    }}
                    onClick={this.loadBuffer}
                  >
                    Load Buffer
                  </button>
                </span>
              </span>
              <CodeMirror
                value={this.state.value}
                options={options}
                onBeforeChange={(editor, data, value) => {
                  this.setState({ value });
                }}
                onChange={(editor, data, value) => {
                  this.codeChange(value);
                }}
                editorDidMount={editor => {
                  editor.setSize("79vw", "55vh");
                }}
              />
              <span style={{ marginLeft: "63vw" }}>
                <button
                  className="btn btn-dark"
                  style={{
                    marginTop: "1.4vh",
                    marginLeft: "-8vw",
                    outline: "none",
                    border: "none",
                    width: "10vw"
                  }}
                  onClick={() => this.handleClick()}
                >
                  Submit
                </button>
                <button
                  className="btn btn-dark"
                  style={{
                    marginTop: "1.4vh",
                    outline: "none",
                    border: "none",
                    width: "10vw",
                    marginLeft: "1vw"
                  }}
                  onClick={this.handleConsole}
                >
                  Run
                </button>
              </span>
            </div>
            <div ref={this.console}>
              <Console render={this.state.renderConsole} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    lastSubmission: state.lastSubmission
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeLastSubmission: value => {
      dispatch({
        type: "CHANGE_LAST_SUBMISSION",
        newSubmission: value
      });
    },
    resetTestcase : () => {
      dispatch({
        type : "RESET_TESTCASES",
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CodingPage);
