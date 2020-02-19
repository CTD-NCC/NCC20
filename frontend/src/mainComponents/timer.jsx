import React, { Component } from "react";
import "./navBar.css";
import { connect } from "react-redux";
import axios from "axios"
import { Redirect } from "react-router"
class Timer extends Component {
  state = {
    seconds: "00",
    minutes: "00",
    hours: "00",
    hrs: 0,
    h1: "7.8vh",
    h2: "7.8vh",
    h3: "7.8vh",
    fetched: false
  };

  startTimer = duration => {
    var timer = duration,
      hrs,
      minutes,
      seconds,
      h1 = "7.8",
      h2 = "7.8",
      h3 = "7.8";
    setInterval(
      (this.timerFunc = () => {
        hrs = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt((timer % 3600) % 60, 10);

        hrs = "0" + hrs;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        this.props.changeHours(hrs);
        this.props.changeMinutes(minutes);
        this.props.changeSeconds(seconds);
        this.setState({ seconds, minutes, hours: hrs });

        this.setState({ h1: h1 + "vh", h2: h2 + "vh", h3: h3 + "vh" });
        //seconds logic
        h1 = parseFloat(h1, 10);
        h1 = h1 - 0.13;
        if (h1 <= 0.13) h1 = 7.8;
        h1 = h1.toString(10);

        //minutes logic
        h2 = parseFloat(h2, 10);
        h2 = h2 - 0.0021;
        if (h2 <= 0.0021) h2 = 7.8;
        h2 = h2.toString(10);

        //hours logic
        h3 = parseFloat(h3, 10);
        h3 = h3 - 0.0007222;
        if (h3 <= 0.0007222) h3 = 7.8;
        h3 = h3.toString(10);

        if (--timer < 0) {
          timer = duration;
        }
      }),
      1000
    );
  };

  componentDidMount() {
    //let hrs = 60 * 60 * 3;
    axios.get("http://Sanket212000.pythonanywhere.com/time/")
    .then(response=> {
      console.log(response);
       this.setState({
        hrs:response.data.time,
        seconds: response.data.ss,
        minutes: response.data.mm,
        hours: response.data.hh,
        fetched: true
     })
     this.startTimer(this.state.hrs);

     });
    
    
  }

  render() {
    if(this.state.fetched){
      if(this.state.hours === "00" && this.state.minutes === "00" && this.state.seconds === "00"){
        return <Redirect push to="/result" />
      }
      return (
        <div className="col-sm-12">
          <div className="row time">
            <div className="circular">
              <div
                id="insideHr"
                style={{
                  borderLeft: "4.5vw solid rgb(10,45,105)",
                  height: this.state.h3
                }}
              ></div>
              <span id="hr">{this.state.hours}</span>
            </div>
            <div className="colon">:</div>
            <div className="circular">
              <div
                id="insideMin"
                style={{
                  borderLeft: "4.5vw solid rgb(10,45,105)",
                  height: this.state.h2
                }}
              ></div>
              <span id="min">{this.state.minutes}</span>
            </div>
            <div className="colon">:</div>
            <div className="circular">
              <div
                id="insideSec"
                style={{
                  borderLeft: "4.5vw solid rgb(10,45,105)",
                  height: this.state.h1
                }}
              ></div>
              <span id="sec">{this.state.seconds}</span>
            </div>
          </div>
        </div>
      );
    }
    else return null;
  }
}
const mapStateToProps = state => {
  return {
    seconds: state.root.seconds,
    minutes: state.root.minutes,
    hours: state.root.hours
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSeconds: seconds => {
      dispatch({
        type: "CHANGE_SECONDS",
        seconds: seconds
      });
    },
    changeMinutes: minutes => {
      dispatch({
        type: "CHANGE_MINUTES",
        minutes: minutes
      });
    },
    changeHours: hours => {
      dispatch({
        type: "CHANGE_HOURS",
        hours: hours
      });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Timer);
