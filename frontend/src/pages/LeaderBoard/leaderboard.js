import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "../../mainComponents/Navbar";
import Footer from "../../mainComponents/footer";
import FinalBoard from "./components/finalBoard";
import Title from "./title";
import axios from "axios";

class Leaderboard extends Component {
  state = {};

  componentDidMount() {
    //const url = "http://sanket212000.pythonanywhere.com/leaderboard/";
    //const response = await fetch(url);
    //const data = await response.json();
    //console.log(response);
  }

  render() {
    return <FinalBoard />;
  }
}

export default Leaderboard;
