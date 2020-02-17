import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../../mainComponents/Navbar";
import Footer from "../../mainComponents/footer.jsx";
import STableFinal from "./components/STableFinal.js";
import Title from "../title";

class SubmissionPage extends Component {
  state = {};
  render() {
    return <STableFinal />;
  }
}

export default SubmissionPage;
