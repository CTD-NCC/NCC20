import React, { Component } from "react";
import "./testcases.css";
// import "./node_modules/bootstrap/dist/css/bootstrap.css";

class Testcase extends Component {

  state={
    width : 0
  };

  getProgressClass = () => {
    let classes = "progress-bar ";
    if(this.state.width>=150)
    {
      if(this.props.testcase === "AC") 
      classes =  classes + "bgs" ;
      else if(this.props.testcase === "WA")
       classes = classes + "bgd";
       else if(this.props.testcase === "CTE")
       classes = classes + "bgw";
       else if(this.props.testcase === "RTE")
       classes = classes + "bgg";
       else
       classes = classes + "bgr";
    return classes;
    }
    else
    {
      classes = classes + "bgload";
      return classes;
    }
  };

  
  componentDidMount(){
    let width = 0;
     setInterval(this.getWidth=()=>{
        width = width + 1;
        this.setState({width});
      
     },40);
    
  }

  render() {
    return (
    
      <div className="testcase">
      <div className="tc progress">
        <div
          className={this.getProgressClass()}
          style={{ width: this.state.width + "%"}}
        >
          {this.state.width>=150?this.props.testcase:""}
        </div>
      </div>
      </div>
      
    );
  }
}

export default Testcase;
