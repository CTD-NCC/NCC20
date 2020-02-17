import React, { Component } from "react";
//import logo from './logo.svg';
import "./QuestionHub.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../../mainComponents/Navbar";
import Footer from "./components/footer";
import QuestionH from "./components/MainTable";

class QuestionHub extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={{ height: "93vh" }}>
          <Navbar />
          <div className="col-sm-10">
            <div className="row" style={{ height: "7vh" }}>
              <p className="pageTitle">
                <u>Question Hub</u>
              </p>
            </div>
            <div className="row" style={{ height: "86vh" }}>
              <QuestionH />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default QuestionHub;
