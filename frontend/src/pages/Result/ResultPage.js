import React, { Component } from "react";
import "./ResultPage.css";
import "bootstrap/dist/css/bootstrap.css";
import DisplayText from "./resultComponents/DisplayText";
import Chart from "./resultComponents/Chart";
// import submissions from "./resultComponents/submissions";
import { connect } from "react-redux";
import axios from "axios";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chartData: {},
            submissions: [],
            atharva: null,
            rank: 0,
            score: 0,
            attempts: 0
        };
    }

    async componentDidMount() {
        axios({
            method: "get",
            url: "http://127.0.0.1:8000/result/",
            headers: { Username: this.props.teamName }
        }).then(response => {
            console.log(response.data);
            this.setState({
                rank: response.data.rank,
                score: response.data.score,
                attempts: response.data.attempts,
                submissions: response.data.scorelist,
                atharva: "fetched",
                chartData: {
                    labels: response.data.scorelist.map(sub => `${sub.range}`),
                    datasets: [{
                        label: "Number of Teams",
                        data: response.data.scorelist.map(sub => sub.users),
                        backgroundColor: "rgb(150, 230, 255)",
                        borderWidth: 1,
                        borderColor: "#000",
                        hoverBorderWidth: 3,
                        hoverBorderColor: "#fff"
                    }]
                }
            });
        });
    }

    render() {
        if (this.state.atharva === null) return null;
        if (this.state.atharva === "fetched") {
            return ( <
                div className = "container-fluid" >
                <
                div className = "row mainRow" >
                <
                div className = "row content"
                style = {
                    { marginLeft: "18vw", marginRight: "18vw" } } >
                <
                div className = "row upper" >
                <
                div className = "col-sm-6" >
                <
                DisplayText text = "Team Name"
                border = "false" / >
                <
                DisplayText text = { this.props.teamName }
                border = "true" / >
                <
                /div> <
                div className = "col-sm-6"
                style = {
                    { paddingRight: "25px" } } >
                <
                DisplayText text = "Rank"
                border = "false" / >
                <
                DisplayText text = { this.state.rank }
                border = "true" / >
                <
                /div>{" "} <
                /div>{" "} <
                div className = "row lower" >
                <
                div className = "col-sm-6" >
                <
                DisplayText text = "Questions Attempted"
                border = "false" / >
                <
                DisplayText text = { this.state.attempts }
                border = "true" / >
                <
                /div>{" "} <
                div className = "col-sm-6"
                style = {
                    { paddingRight: "25px" } } >
                <
                DisplayText text = "Score"
                border = "false" / >
                <
                DisplayText text = { this.state.score }
                border = "true" / >
                <
                /div>{" "} <
                /div>{" "} <
                /div>{" "} <
                div className = "row chartHolder" > { " " } <
                div className = "col-sm-12" >
                <
                Chart chartData = { this.state.chartData }
                />{" "} <
                /div>{" "} <
                /div>{" "} <
                /div>{" "} <
                /div>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        teamName: state.root.userName,
        total: state.testcases.userName
    };
};
export default connect(mapStateToProps)(App);