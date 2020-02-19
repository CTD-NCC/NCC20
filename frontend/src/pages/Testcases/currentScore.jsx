import React, { Component } from "react";
import "./testcases.css";
import "bootstrap/dist/css/bootstrap.css";
import {Redirect} from "react-router";

class CurrentScore extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       redirect: false
    }
  }
  
  handleClick = () => {
    this.setState({
      redirect: true
    })
  }
  render() {
    if(this.state.redirect===true){
      this.setState({
        redirect: false
      })
      return <Redirect push to="/coding" />
    }
    return ( 
      <div>
        <div
          style={{
            fontSize: "30px",
            marginLeft: "15px",
            color: "rgb(30,65,125)",
            textShadow: "1px 1px 2px #000",
          }}
        >
          SCORE
        </div>
        <div className="score">{this.props.score}</div>
        <div
          style={{
            marginTop: "6vh",
            marginLeft: "-5vw",
            fontSize: "20px",
            // boxShadow:"1px 1px 4px rgb(3,80,100)",
            borderRadius: "1vh",
            padding: "2vh",
            backgroundColor: "rgba(255, 255, 255, 0.452)",
            color: "rgb(20,60,40)",
            boxShadow: "inset 0 0 5px #0350b4",
          display :"none"
          }}
        >
          1 out of 8 questions solved
        </div>
        <button className="btn retry" onClick={() => this.handleClick()}>Retry</button>
      </div>
    );
  }
}
 
export default CurrentScore;