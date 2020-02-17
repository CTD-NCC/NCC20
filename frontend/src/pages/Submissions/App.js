import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../../mainComponents/Navbar";
import Footer from "./components/footer";
import Submissions from "./components/submissions";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={{ height: "93vh" }}>
          <Navbar />
          <div className="col-sm-10">
            <div className="row" style={{ height: "7vh" }}>
              <p className="pageTitle">
                <u>Submissions</u>
              </p>
            </div>
            <div className="row" style={{ height: "86vh" }}>
              <div className="container">
                <Submissions />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
