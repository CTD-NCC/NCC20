import React, { Component } from "react";
import "./tabBar.css";
import axios from "axios";
import { connect } from "react-redux";

class TabBar extends Component {
  handleClick(val) {
     axios({method : "get", url : "http://127.0.0.1:8000/code/"+`${val}`+"/", headers : {Username : this.props.username}}).then(response => {
           this.props.updateQuestion(response.data.question);
       })
    this.props.updateNo(val);
    this.props.passValue(val);
  }
  render() {
    console.log(this.props.class1);
    return (
      <div className="navQuestion">
        <ul className="navQuestionLinks">
          <li className={this.props.class1} onClick={() => this.handleClick(1)}>
            <a>Question 1</a>
          </li>
          <li className={this.props.class2} onClick={() => this.handleClick(2)}>
            <a>Question 2</a>
          </li>
          <li className={this.props.class3} onClick={() => this.handleClick(3)}>
            <a>Question 3</a>
          </li>
          <li className={this.props.class4} onClick={() => this.handleClick(4)}>
            <a>Question 4</a>
          </li>
          <li className={this.props.class5} onClick={() => this.handleClick(5)}>
            <a>Question 5</a>
          </li>
          <li className={this.props.class6} onClick={() => this.handleClick(6)}>
            <a>Question 6</a>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    qno : state.coding.qno,
    username : state.root.userName
  }

}

const mapDispatchToProps = dispatch => {

  return {
     updateNo: qno => {
      dispatch({ type: "UPDATE_NO", qno : qno });
    },
      updateQuestion: (question) => {
      dispatch({ type: "UPDATE_QUESTION", question: question });
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TabBar);
