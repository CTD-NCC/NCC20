import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../../mainComponents/Navbar";
import Footer from "../../mainComponents/footer.jsx";
import Testcases from "./testcases";
import "../Coding Page/App.css";
import Title from "./../title";

class RenderTestPage extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={{ height: "93vh" }}>
          <Navbar />
          <div className="col-sm-10">
            <div className="row" style={{ height: "7vh" }}>
              <Title title="Testcases"></Title>
            </div>
            <div className="row" style={{ height: "86vh" }}>
              <Testcases />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default RenderTestPage;
