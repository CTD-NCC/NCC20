import React, { Component } from "react";
import "./tabBar.css";

class TabBar extends Component {
  handleClick(val) {
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
          <li className={this.props.class7} onClick={() => this.handleClick(7)}>
            <a>Question 7</a>
          </li>
          <li className={this.props.class8} onClick={() => this.handleClick(8)}>
            <a>Question 8</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default TabBar;
