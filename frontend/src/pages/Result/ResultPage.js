import React, { Component } from "react";
import "./ResultPage.css";
import "bootstrap/dist/css/bootstrap.css";
import DisplayText from "./resultComponents/DisplayText";
import Chart from "./resultComponents/Chart";
// import submissions from "./resultComponents/submissions";
import { connect } from "react-redux";
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {},
      submissions: [],
      atharva: null
    };
  }

  async componentDidMount(){
    axios.get("http://sanket212000.pythonanywhere.com/result/").then( response => {
      this.setState({
        submissions: response.data, 
        atharva: "fetched",
        chartData: {
          labels: response.data.map(sub => `${sub.range}`),
          datasets: [
            {
              label: "Number of Teams",
              data: response.data.map(sub => sub.usrs),
              backgroundColor: "rgb(150, 230, 255)",
              borderWidth: 1,
              borderColor: "#000",
              hoverBorderWidth: 3,
              hoverBorderColor: "#fff"
            }
          ]
        }
      });
    })
  }

  render() {
    if(this.state.atharva === null)
      return null;
    if(this.state.atharva === "fetched"){
      return (
        <div className="container-fluid">
          <div className="row mainRow">
            <div className="row content" style={{ marginLeft: "18vw", marginRight: "18vw" }}>
              <div className="row upper">
                <div className="col-sm-6">
                  <DisplayText text="Team Name" border="false" />
                  <DisplayText text={this.props.teamName} border="true" />
                </div>
                <div className="col-sm-6" style={{ paddingRight: "25px" }}>
                  <DisplayText text="Rank" border="false" />
                  <DisplayText text="7" border="true" />
                </div>
              </div>
              <div className="row lower">
                <div className="col-sm-6">
                  <DisplayText text="Questions Attempted" border="false" />
                  <DisplayText text="6" border="true" />
                </div>
                <div className="col-sm-6" style={{ paddingRight: "25px" }}>
                  <DisplayText text="Score" border="false" />
                  <DisplayText text="400" border="true" />
                </div>
              </div>
            </div>
            <div className="row chartHolder">
              <div className="col-sm-12">
                <Chart chartData={this.state.chartData} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    teamName: state.root.userName
  };
};
export default connect(mapStateToProps)(App);
