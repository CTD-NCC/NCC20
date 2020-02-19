import React, { Component } from "react";
import "./testcases.css";
import Testcase from "./testcase";
import CurrentScore from "./currentScore";
import Title from '../title';
import { connect } from "react-redux";
import "font-awesome/css/font-awesome.min.css";
import axios from "axios";

class Testcases extends Component {

  
  numberBorder = testcase => {
    
    let classes = "number ";
    if(this.props.time<150){
    classes = classes + "border border-secondary";
    return classes;
    }
    if(testcase === "AC")
      classes = classes + "border border-success"
    else if(testcase === "WA")
      classes = classes + "border border-danger";
    else if(testcase === "CTE")
      classes = classes + "border border-warning";
    else if(testcase === "RTE")
       classes = classes + "border border-secondary";
    else
       classes = classes + "border"
    return classes;
  };

  componentDidMount(){
    var result , score ,total ,error ;
    axios.get("http://sanket212000.pythonanywhere.com/test/").then((response) => {
      this.props.updateTestcases(response.data.testcases);
      result = response.data.status;
      score = response.data.score;
      total =  response.data.total;
      error = response.data.error;
   });
    let time =0;
    var i= setInterval(this.setTime=()=>{
      time =time +1;
      this.props.updateTime(time);
      if(time===150)
      {
        this.props.updateResult(result);
        this.props.updateScore(score);
        this.props.updateTotal(total);
        this.props.updateConsole(error);
        clearInterval(i);
      }
    },40);
   
  }
  render() {
    
    return (
      <div className="col-sm-12">
        <div className="row" style={{ height: "55vh" ,marginTop:"6vh"}}>
          <div className="col-lg-7" style={{ marginLeft: "4vw" }}>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                height: "54vh",
                alignItems: "center"
              }}
            >
              <div className="result col-lg-3">{this.props.result}</div>
              <div
                className="col-lg-1"
                style={{ border: ".5px solid rgb(39, 40, 43)" }}
              ></div>
              <div
                className="col"
                style={{
                  borderLeft: "1px solid rgb(39, 40, 43)",
                  height: "40vh"
                }}
              >
                {this.props.testcases.map((testcase, index) => (
                  <div className="row" style={{ height: "8vh" }}>
                    <div className="testcaseLines col-lg-2" />    
                    <div className={this.numberBorder(testcase)}>
                      {index+1}
                    </div>
                      <Testcase  testcase={testcase} />
                      {/* <span style={{marginLeft:"2vh"}}> &#10004;</span>  */}
                  
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="col"
            style={{
              display: "flex",
              justifyContent: "center",
              marginRight: "5vw"
            }}
          >
            <CurrentScore score = {this.props.score} />
          </div>
        </div>
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center", height: "28vh" }}
        >
          <div className="col-lg-11">
            <div className="console scroller" >
              <h4 style={{ textAlign:"center"}}>Console</h4>
               {this.props.error} 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return  {
    testcases : state.testcases.testcases,
    time : state.testcases.time,
    result : state.testcases.result,
    score : state.testcases.score,
    error : state.testcases.error
  };
}

const mapDispatchToProps = dispatch => {
 return {
   updateTime : (time) => { dispatch({type :"UPDATE_TIME",time : time})},
   updateResult : (result) => { dispatch({type : "UPDATE_RESULT",result : result})},
   updateTestcases : (testcases) => { dispatch({type : "UPDATE_TESTCASES",testcases : testcases})},
   updateScore : (score) => { dispatch({ type : "UPDATE_SCORE", score : score})},
   updateTotal : (total) => { dispatch({ type : "UPDATE_TOTAL", total : total})},
   updateConsole : (error) => { dispatch({ type : "UPDATE_CONSOLE", error : error})}
 }
}


export default connect(mapStateToProps, mapDispatchToProps)(Testcases);
