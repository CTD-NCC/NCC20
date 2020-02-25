import React, { Component } from "react";
import "./QuestionHub.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../../mainComponents/Navbar";
import Footer from "../../mainComponents/footer.jsx";
import QuestionH from "./components/MainTable";
import Title from "./title";

class QuestionHub extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={{ height: "93vh" }}>
          <Navbar />
          <div className="col-sm-10">
            <div className="row" style={{ height: "7vh" }}>
              <Title title="Question Hub"></Title>
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
