import React, { Component } from "react";
import "../styles/team.css";

class team extends Component {
  constructor(props) {
    super(props);

    this.state = {
      check: this.props.check,
      exit: "",
      positiont: this.props.team !== "" ? "upt" : "downt",
      positionp: this.props.team !== "" ? "upp" : "downp",
      teamname: this.props.team,
      password: this.props.pass,
      errort: "noBorder",
      errorp: "noBorder"
    };
  }

  handleFocust(e) {
    this.setState({
      positiont: "upt"
    });
  }

  handleFocusp(e) {
    this.setState({
      positionp: "upp"
    });
  }

  handleBlurt(e) {
    if (e.target.value === "") {
      this.setState({
        positiont: "downt"
      });
    } else {
      this.setState({
        positiont: "upt"
      });
    }
  }

  handleBlurp(e) {
    if (e.target.value === "") {
      this.setState({
        positionp: "downp"
      });
    } else {
      this.setState({
        positionp: "upp"
      });
    }
  }

  checkPassword(value) {
    if (value.length < 6 || value.length > 20) {
      this.props.changeCheck("red");
    } else {
      this.props.changeCheck("green");
    }
  }

  handlePassChange(e) {
    this.checkPassword(e.target.value);
    this.props.changePassword(e.target.value);
    this.setState({
      password: e.target.value
    });
  }

  checkTeamname(value) {
    if (value.length === 0) {
      this.props.changeCheckT("Username cannot be empty");
    } else if (value.length < 3) {
      this.props.changeCheckT("Username should be minimum 3 characters");
    } else {
      this.props.changeCheckT("");
    }
  }

  handleTeamChange(e) {
    this.checkTeamname(e.target.value);
    this.props.changeTeamName(e.target.value);
    this.setState({
      teamname: e.target.value
    });
  }

  handleClick() {
    if (this.state.teamname === "" || this.props.checkt != "") {
      if (this.props.checkt === "Username should be minimum 3 characters") {
        this.props.changeCheckT("Username should be minimum 3 characters");
      } else {
        this.props.changeCheckT("Username cannot be empty");
      }

      this.setState({
        errort: "Border"
      });
    } else {
      this.setState({
        errort: "noBorder"
      });
    }
    if (this.state.password === "" || this.props.check != "green") {
      this.props.changeCheck("red");
      this.setState({
        errorp: "Border"
      });
    } else {
      this.setState({
        errorp: "noBorder"
      });
    }
    if (this.props.check === "green" && this.props.checkt === "") {
      this.setState({
        exit: "exit"
      });
      this.props.changeModeR(this.state.teamname, this.state.password);
    }
  }

  render() {
    return (
      <div className={`team entry ${this.state.exit}`}>
        <div className="reg">Register</div>
        <div className="inputbox in1">
          <label className={`teaml ${this.state.positiont}`}>Team Name</label>
          <input
            type="text"
            maxLength="30"
            className={`TeamName ${this.state.errort}`}
            onFocus={this.handleFocust.bind(this)}
            onBlur={this.handleBlurt.bind(this)}
            onChange={this.handleTeamChange.bind(this)}
            value={this.props.team}
            spellCheck="false"
          ></input>
          <p className="teamCheck">{this.props.checkt}</p>
        </div>
        <div className="inputbox in2">
          <label className={`passl ${this.state.positionp}`}>Password</label>
          <input
            type="password"
            maxLength="30"
            className={`password ${this.state.errorp}`}
            onFocus={this.handleFocusp.bind(this)}
            onBlur={this.handleBlurp.bind(this)}
            onChange={this.handlePassChange.bind(this)}
            value={this.props.pass}
            spellCheck="false"
          ></input>
        </div>
        <div className={`condition`}>
          Password must contain :
          <p className={`charCondition ${this.props.check}`}>
            1) 6 to 20 characters
          </p>
        </div>
        <div className="radioWrapper">
          <label class="radio-inline radioLabel">
            <input
              type="radio"
              name="optradio"
              className="radioButton"
              defaultChecked
            ></input>
            Junior
          </label>
          <label class="radio-inline">
            <input type="radio" name="optradio" className="radioButton"></input>
            Senior
          </label>
        </div>
        <div className="in3">
          <button className="next" onClick={this.handleClick.bind(this)}>
            NEXT
          </button>
        </div>
      </div>
    );
  }
}

export default team;
