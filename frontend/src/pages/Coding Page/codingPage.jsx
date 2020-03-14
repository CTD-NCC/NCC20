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
import { connect } from "react-redux";
import axios from "axios";


class CodingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      renderConsole: false,
      value: "",
      run: false,
      autoscroll : false
    };
    let fileReader;
    this.console = React.createRef();
  }

  componentDidMount() {
   const username = localStorage.getItem('Username');
    axios({
      method: "get",
      url: "http://" + `${this.props.url}`+"/code/" + `${this.props.qno}` + "/",
      params : {attempt: this.props.attempt},
      headers: { Username: username }
    }).then(response => {
      this.props.updateQuestion(response.data.question);
      this.props.updateTitle(response.data.title);
      this.setState({
        value : response.data.code
      })
    });
    this.props.updateAttempt(-1);
  }

  componentDidUpdate() {
    if (this.state.autoscroll === true)
    {
      this.console.current.scrollIntoView({ behavior: "smooth" });
        this.setState({autoscroll:false});
    }
  }

  passValue(val) {
    this.props.handlePassedValue(val);
    this.setState({
      renderConsole: false
    });
  }

  handleClick = () => {

    this.props.resetTestcase();
    this.props.resetConsole();
    this.props.resetTests();
    this.setState({
      redirect: true,
      run: false
    });
    var result, total, score, error;
    const username = localStorage.getItem('Username');
    //this.setState({ renderConsole: false });
    axios({
      method: "post",
      url: "http://"+`${this.props.url}`+"/code/" + `${this.props.qno}` + "/",
      data: {
        content: this.state.value,
        runFlag: false,
        ext: this.props.ext
      },
      headers: { Username: username }
    })
      .then(response => {
        console.log(response);
        this.props.updateTestcases(response.data.testcases);
        result = response.data.status;
        score = response.data.score;
        error = response.data.error;
        total = response.data.total;
        this.props.updateResult(result);
        this.props.updateScore(score);
        this.props.updateConsole(error);
        this.props.updateTotal(total);
      })
      .catch(error => {
      });
  };
  handleConsole = () => {
    this.setState({
      renderConsole: true,
      run: true,
      autoscroll : true
    });
    
    const username = localStorage.getItem('Username');
    axios({
      method: "post",
      url: "http://"+`${this.props.url}`+"/code/" + `${this.props.qno}` + "/",
      data: {
        content: this.state.value,
        runFlag: true,
        ext: this.props.ext
      },
      headers: { Username: username}
    })
      .then(response => {
          this.props.updateRunError(response.data.error);
          this.props.updateRunResult(response.data.result);
      })
      .catch(error => {
        console.log(error);
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
              <h4>{this.props.title}</h4>
              <div>{this.props.question}</div>
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
                <span
                  style={{
                    paddingLeft: "3vw",
                    color: "white",
                    width: "13vw",
                    marginTop: "1.5vh",
                    fontSize: "20px"
                  }}
                >
                  Code Editor
                </span>
                <CPPUse />
                <span style={{ marginLeft: "30vw" }}>
                  {/* <input
                    type="file"
                    id="file"
                    onChange={e => this.handleChange(e.target.files[0])}
                    accept=".cpp"
                  />
                  <label
                    for="file"
                    style={{ marginTop: "1vh", marginLeft: "-18vw" }}
                  >
                    Choose file
                  </label> */}
                  <button
                    className="btn btn-dark"
                    style={{
                      marginBottom: "1vh",
                      outline: "none",
                      border: "none",
                      marginTop: "0.7vh",
                      marginLeft: "1vw",
                      marginRight: "1vw",
                      width: "10vw",
                      height: "4.6vh"
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
                  htmlType="submit"
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
                  htmlType="submit"
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
              <Console renderConsole= {this.state.renderConsole}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    lastSubmission: state.root.lastSubmission,
    question: state.coding.question,
    qno: state.coding.qno,
    ext: state.coding.ext,
    testcases: state.testcases.testcases,
    time: state.testcases.time,
    result: state.testcases.result,
    score: state.testcases.score,
    error: state.testcases.error,
    username: state.root.userName,
    title: state.coding.title,
    attempt : state.coding.attempt,
    url : state.Url.url,
    runError : state.coding.error,
    runResult : state.coding.result,

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
    resetTestcase: () => {
      dispatch({
        type: "RESET_TESTCASES"
      });
    },
    resetConsole: () => {
      dispatch({
        type: "RESET_CONSOLE"
      });
    },
    resetTests: () => {
      dispatch({
        type: "RESET_TESTS"
      });
    },

    updateQuestion: question => {
      dispatch({ type: "UPDATE_QUESTION", question: question });
    },
    updateTitle: title => {
      dispatch({ type: "UPDATE_TITLE", title: title });
    },
    updateTime: time => {
      dispatch({ type: "UPDATE_TIME", time: time });
    },
    updateResult: result => {
      dispatch({ type: "UPDATE_RESULT", result: result });
    },
    updateTestcases: testcases => {
      dispatch({ type: "UPDATE_TESTCASES", testcases: testcases });
    },
    updateScore: score => {
      dispatch({ type: "UPDATE_SCORE", score: score });
    },
    updateTotal: total => {
      dispatch({ type: "UPDATE_TOTAL", total: total });
    },
    updateConsole: error => {
      dispatch({ type: "UPDATE_CONSOLE", error: error });
    },
    updateAttempt : attempt => {
      dispatch({
        type : "UPDATE_ATTEMPT",
        attempt : attempt
      })
    },
    updateRunError : error => {
        dispatch({
          type : "UPDATE_RUNERROR",
          error : error
      })
    },
      updateRunResult : result => {
          dispatch({
            type : "UPDATE_RUNRESULT",
            result : result
        })
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CodingPage);
