import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../../mainComponents/Navbar";
import Footer from "../LeaderBoard/components/footer";
import CodingPage from "./codingPage";

class Coding extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={{ height: "93vh" }}>
          <Navbar />
          <div className="col-sm-10">
            <div className="row" style={{ height: "7vh" }}>
              <p className="pageTitle">
                <u>Coding Page</u>
              </p>
            </div>
            <div className="row" style={{ height: "86vh" }}>
              <CodingPage />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Coding;
