import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../../mainComponents/Navbar";
import Footer from "../../mainComponents/footer.jsx";
import CodingPage from "./codingPage";

class Coding extends Component {
  state = {
    class1: "highlight",
    class2: "black",
    class3: "black",
    class4: "black",
    class5: "black",
    class6: "black",
    class7: "black",
    class8: "black",
    questionNumber: 1
  };

  handlePassedValue(val) {
    if (val === 1) {
      this.setState({
        class1: "highlight",
        class2: "black",
        class3: "black",
        class4: "black",
        class5: "black",
        class6: "black",
        class7: "black",
        class8: "black",
        questionNumber: 1
      });
    } else if (val === 2) {
      this.setState({
        class1: "black",
        class2: "highlight",
        class3: "black",
        class4: "black",
        class5: "black",
        class6: "black",
        class7: "black",
        class8: "black",
        questionNumber: 2
      });
    } else if (val === 3) {
      this.setState({
        class1: "black",
        class2: "black",
        class3: "highlight",
        class4: "black",
        class5: "black",
        class6: "black",
        class7: "black",
        class8: "black",
        questionNumber: 3
      });
    } else if (val === 4) {
      this.setState({
        class1: "black",
        class2: "black",
        class3: "black",
        class4: "highlight",
        class5: "black",
        class6: "black",
        class7: "black",
        class8: "black",
        questionNumber: 4
      });
    } else if (val === 5) {
      this.setState({
        class1: "black",
        class2: "black",
        class3: "black",
        class4: "black",
        class5: "highlight",
        class6: "black",
        class7: "black",
        class8: "black",
        questionNumber: 5
      });
    } else if (val === 6) {
      this.setState({
        class1: "black",
        class2: "black",
        class3: "black",
        class4: "black",
        class5: "black",
        class6: "highlight",
        class7: "black",
        class8: "black",
        questionNumber: 6
      });
    } else if (val === 7) {
      this.setState({
        class1: "black",
        class2: "black",
        class3: "black",
        class4: "black",
        class5: "black",
        class6: "black",
        class7: "highlight",
        class8: "black",
        questionNumber: 7
      });
    } else if (val === 8) {
      this.setState({
        class1: "black",
        class2: "black",
        class3: "black",
        class4: "black",
        class5: "black",
        class6: "black",
        class7: "black",
        class8: "highlight",
        questionNumber: 8
      });
    }
  }

  componentDidMount() {
    if (this.props.location.param2 === 1) {
      this.setState({
        class1: "highlight",
        class2: "black",
        class3: "black",
        class4: "black",
        class5: "black",
        class6: "black",
        class7: "black",
        class8: "black",
        questionNumber: 1
      });
    } else if (this.props.location.param2 === 2) {
      this.setState({
        class1: "black",
        class2: "highlight",
        class3: "black",
        class4: "black",
        class5: "black",
        class6: "black",
        class7: "black",
        class8: "black",
        questionNumber: 2
      });
    } else if (this.props.location.param2 === 3) {
      this.setState({
        class1: "black",
        class2: "black",
        class3: "highlight",
        class4: "black",
        class5: "black",
        class6: "black",
        class7: "black",
        class8: "black",
        questionNumber: 3
      });
    } else if (this.props.location.param2 === 4) {
      this.setState({
        class1: "black",
        class2: "black",
        class3: "black",
        class4: "highlight",
        class5: "black",
        class6: "black",
        class7: "black",
        class8: "black",
        questionNumber: 4
      });
    } else if (this.props.location.param2 === 5) {
      this.setState({
        class1: "black",
        class2: "black",
        class3: "black",
        class4: "black",
        class5: "highlight",
        class6: "black",
        class7: "black",
        class8: "black",
        questionNumber: 5
      });
    } else if (this.props.location.param2 === 6) {
      this.setState({
        class1: "black",
        class2: "black",
        class3: "black",
        class4: "black",
        class5: "black",
        class6: "highlight",
        class7: "black",
        class8: "black",
        questionNumber: 6
      });
    } else if (this.props.location.param2 === 7) {
      this.setState({
        class1: "black",
        class2: "black",
        class3: "black",
        class4: "black",
        class5: "black",
        class6: "black",
        class7: "highlight",
        class8: "black",
        questionNumber: 7
      });
    } else if (this.props.location.param2 === 8) {
      this.setState({
        class1: "black",
        class2: "black",
        class3: "black",
        class4: "black",
        class5: "black",
        class6: "black",
        class7: "black",
        class8: "highlight",
        questionNumber: 8
      });
    }
  }

  render() {
    //console.log(this.props.location.param2);

    return (
      <CodingPage
        handlePassedValue={this.handlePassedValue.bind(this)}
        class1={this.state.class1}
        class2={this.state.class2}
        class3={this.state.class3}
        class4={this.state.class4}
        class5={this.state.class5}
        class6={this.state.class6}
        class7={this.state.class7}
        class8={this.state.class8}
        questionNumber={this.state.questionNumber}
      />
    );
  }
}

export default Coding;
