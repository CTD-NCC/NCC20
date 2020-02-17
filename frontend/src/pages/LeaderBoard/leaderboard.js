import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "../../mainComponents/Navbar";
import Footer from "./components/footer";
import FinalBoard from "./components/finalBoard";

class Leaderboard extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={{ height: "93vh" }}>
          <Navbar />
          <div className="col-sm-10">
            <div className="row" style={{ height: "7vh" }}>
              <p className="pageTitle">
                <u>LEADERBOARD</u>
              </p>
            </div>
            <div className="row" style={{ height: "86vh" }}>
              <FinalBoard />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Leaderboard;
