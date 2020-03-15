import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../../mainComponents/Navbar";
import Footer from "../../mainComponents/footer.jsx";
import CodingPage from "./codingPage";
import {connect} from "react-redux";

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

      this.props.highlight(val);
    // else if (val === 2) {
    //   this.setState({
    //     class1: "black",
    //     class2: "highlight",
    //     class3: "black",
    //     class4: "black",
    //     class5: "black",
    //     class6: "black",
    //     class7: "black",
    //     class8: "black",
    //     questionNumber: 2
    //   });
    // } else if (val === 3) {
    //   this.setState({
    //     class1: "black",
    //     class2: "black",
    //     class3: "highlight",
    //     class4: "black",
    //     class5: "black",
    //     class6: "black",
    //     class7: "black",
    //     class8: "black",
    //     questionNumber: 3
    //   });
    // } else if (val === 4) {
    //   this.setState({
    //     class1: "black",
    //     class2: "black",
    //     class3: "black",
    //     class4: "highlight",
    //     class5: "black",
    //     class6: "black",
    //     class7: "black",
    //     class8: "black",
    //     questionNumber: 4
    //   });
    // } else if (val === 5) {
    //   this.setState({
    //     class1: "black",
    //     class2: "black",
    //     class3: "black",
    //     class4: "black",
    //     class5: "highlight",
    //     class6: "black",
    //     class7: "black",
    //     class8: "black",
    //     questionNumber: 5
    //   });
    // } else if (val === 6) {
    //   this.setState({
    //     class1: "black",
    //     class2: "black",
    //     class3: "black",
    //     class4: "black",
    //     class5: "black",
    //     class6: "highlight",
    //     class7: "black",
    //     class8: "black",
    //     questionNumber: 6
    //   });
    // } else if (val === 7) {
    //   this.setState({
    //     class1: "black",
    //     class2: "black",
    //     class3: "black",
    //     class4: "black",
    //     class5: "black",
    //     class6: "black",
    //     class7: "highlight",
    //     class8: "black",
    //     questionNumber: 7
    //   });
    // } else if (val === 8) {
    //   this.setState({
    //     class1: "black",
    //     class2: "black",
    //     class3: "black",
    //     class4: "black",
    //     class5: "black",
    //     class6: "black",
    //     class7: "black",
    //     class8: "highlight",
    //     questionNumber: 8
    //   });
    // }
  }

  componentDidMount() {
    this.props.highlight(this.props.location.param2 );
    // if (this.props.location.param2 === 1) {
    //   this.setState({
    //     class1: "highlight",
    //     class2: "black",
    //     class3: "black",
    //     class4: "black",
    //     class5: "black",
    //     class6: "black",
    //     class7: "black",
    //     class8: "black",
    //     questionNumber: 1
    //   });
    // } else if (this.props.location.param2 === 2) {
    //   this.setState({
    //     class1: "black",
    //     class2: "highlight",
    //     class3: "black",
    //     class4: "black",
    //     class5: "black",
    //     class6: "black",
    //     class7: "black",
    //     class8: "black",
    //     questionNumber: 2
    //   });
    // } else if (this.props.location.param2 === 3) {
    //   this.setState({
    //     class1: "black",
    //     class2: "black",
    //     class3: "highlight",
    //     class4: "black",
    //     class5: "black",
    //     class6: "black",
    //     class7: "black",
    //     class8: "black",
    //     questionNumber: 3
    //   });
    // } else if (this.props.location.param2 === 4) {
    //   this.setState({
    //     class1: "black",
    //     class2: "black",
    //     class3: "black",
    //     class4: "highlight",
    //     class5: "black",
    //     class6: "black",
    //     class7: "black",
    //     class8: "black",
    //     questionNumber: 4
    //   });
    // } else if (this.props.location.param2 === 5) {
    //   this.setState({
    //     class1: "black",
    //     class2: "black",
    //     class3: "black",
    //     class4: "black",
    //     class5: "highlight",
    //     class6: "black",
    //     class7: "black",
    //     class8: "black",
    //     questionNumber: 5
    //   });
    // } else if (this.props.location.param2 === 6) {
    //   this.setState({
    //     class1: "black",
    //     class2: "black",
    //     class3: "black",
    //     class4: "black",
    //     class5: "black",
    //     class6: "highlight",
    //     class7: "black",
    //     class8: "black",
    //     questionNumber: 6
    //   });
    // } else if (this.props.location.param2 === 7) {
    //   this.setState({
    //     class1: "black",
    //     class2: "black",
    //     class3: "black",
    //     class4: "black",
    //     class5: "black",
    //     class6: "black",
    //     class7: "highlight",
    //     class8: "black",
    //     questionNumber: 7
    //   });
    // } else if (this.props.location.param2 === 8) {
    //   this.setState({
    //     class1: "black",
    //     class2: "black",
    //     class3: "black",
    //     class4: "black",
    //     class5: "black",
    //     class6: "black",
    //     class7: "black",
    //     class8: "highlight",
    //     questionNumber: 8
    //   });
    // }
  }

  render() {
    //console.log(this.props.location.param2);

    return (
      <CodingPage
        handlePassedValue={this.handlePassedValue.bind(this)}
        class1={this.props.class1}
        class2={this.props.class2}
        class3={this.props.class3}
        class4={this.props.class4}
        class5={this.props.class5}
        class6={this.props.class6}
        class7={this.props.class7}
        class8={this.props.class8}
        questionNumber={this.props.questionNumber}
      />
    );
  }
}

const mapStateToProps = state => {
 return {
   questionNumber : state.qtab.questionNumber,
   class1 : state.qtab.class1,
   class2 : state.qtab.class2,
   class3 : state.qtab.class3,
   class4 : state.qtab.class4,
   class5 : state.qtab.class5,
   class6 : state.qtab.class6,
 }
}

const mapDispatchToProps = dispatch => {
return {
  highlight : questionNumber => dispatch({
    type : "HIGHLIGHT",
    questionNumber : questionNumber
  })
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Coding);
