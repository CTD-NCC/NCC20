import React from "react";
import "./Login.css";
import Header from "./Components/header";
import Team from "./Components/team";
import Players from "./Components/players";
import "./styles/bootstrap.css";
import { Redirect } from "react-router";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: 0,
      teamname: "",
      password: "",
      player1name: "",
      player1contact: "",
      player1email: "",
      player2name: "",
      player2contact: "",
      player2email: "",
      check: "",
      checkt: "",
      padd: "",
      minutes: 0,
      seconds: 0,
      count: 60,
      width: 0,
      colorBar: "#05a000",
      redirect: false,
      buttonDisable: true,
      startClass: "startContest"
    };
  }

  changeModeR(teamn, pass) {
    setTimeout(
      function skip() {
        this.setState({
          mode: 2,
          teamname: teamn,
          password: pass
        });
      }.bind(this),
      700
    );
  }

  changeModeP() {
    setTimeout(
      function skip() {
        this.setState({
          mode: !this.state.mode,
          teamname: this.state.teamname,
          password: this.state.password
        });
      }.bind(this),
      500
    );
  }

  changeModePL() {
    this.setState({
      mode: 3
    });
  }

  changeTeamName(teamn) {
    this.setState({
      teamname: teamn
    });
  }

  changePassword(pass) {
    this.setState({
      password: pass
    });
  }

  updateValues(entity, value) {
    if (entity === "player1name") {
      this.setState({
        player1name: value
      });
    } else if (entity === "player1contact") {
      this.setState({
        player1contact: value
      });
    } else if (entity === "player1email") {
      this.setState({
        player1email: value
      });
    } else if (entity === "player2name") {
      this.setState({
        player2name: value
      });
    } else if (entity === "player2contact") {
      this.setState({
        player2contact: value
      });
    } else if (entity === "player2email") {
      this.setState({
        player2email: value
      });
    }
  }

  changeCheck(val) {
    this.setState({
      check: val
    });
  }

  changeCheckT(val) {
    this.setState({
      checkt: val
    });
  }

  handleStart() {
    this.setState({
      redirect: true
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/question" />;
    }
    if (!this.state.mode) {
      return (
        <div className="teamParent">
          <Header />
          <Team
            changeModeR={this.changeModeR.bind(this)}
            team={this.state.teamname}
            pass={this.state.password}
            changeTeamName={this.changeTeamName.bind(this)}
            changePassword={this.changePassword.bind(this)}
            check={this.state.check}
            changeCheck={this.changeCheck.bind(this)}
            checkt={this.state.checkt}
            changeCheckT={this.changeCheckT.bind(this)}
            changeModePL={this.changeModePL.bind(this)}
          />
        </div>
      );
    } else {
      return (
        <div className="container-fluid">
          <div className="row" style={{ height: "100vh" }}>
            <div className="col-sm-12">
              <div
                className="row"
                style={{
                  height: "7vh",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                {/* <p className="pageTitle" style={{ color: "white" }}>
                  Instructions
                </p> */}
              </div>
              <div className="row wrapper" style={{ height: "86vh" }}>
                <div className="instHeader">INSTRUCTIONS</div>
                <div className="inst">
                  <ol type="1" className="list">
                    <li>Each question has 100 points.</li>
                    <li>Duration of the contest is 3 hours.</li>
                  </ol>
                  <div className="texttt">
                    <button
                      type="button"
                      className={this.state.startClass}
                      onClick={this.handleStart.bind(this)}
                    >
                      Start
                    </button>
                  </div>
                  <div
                    style={{
                      height: "1vh",
                      width: "100%",
                      backgroundColor: "#d7f8f5",
                      marginTop: "7vh"
                    }}
                  >
                    <div
                      style={{
                        height: "1vh",
                        backgroundColor: this.state.colorBar,
                        width: this.state.width,
                        transition: "1s"
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
