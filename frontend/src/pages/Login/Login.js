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
      redirect: false
    };
  }

  changeModeR(teamn, pass) {
    setTimeout(
      function skip() {
        this.setState({
          mode: 1,
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

  render() {
    if (this.state.redirect) {
      this.setState({
        redirect: false
      });
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
          />
        </div>
      );
    } else if (this.state.mode === 1) {
      return (
        <div className="playerParent">
          <Header />
          <Players
            changeModeP={this.changeModeP.bind(this)}
            updateValues={this.updateValues.bind(this)}
            player1name={this.state.player1name}
            player1contact={this.state.player1contact}
            player1email={this.state.player1email}
            player2name={this.state.player2name}
            player2contact={this.state.player2contact}
            player2email={this.state.player2email}
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
                  <div className="textt">The Game starts in</div>
                  <div className="start">
                    <p>
                      {this.state.minutes}:{this.state.padd}
                      {this.state.seconds}
                    </p>
                  </div>
                  <div
                    style={{
                      height: "1vh",
                      width: "100%",
                      backgroundColor: "#d7f8f5",
                      marginTop: "-2.5vh"
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

  componentDidMount() {
    this.myinterval = setInterval(() => {
      if (this.state.count === 0) {
        clearInterval(this.myinterval);
        this.setState({
          redirect: true
        });
      }
      var per = ((60 - this.state.count) / 60) * 100;
      if (per < 70) {
        if (this.state.seconds < 11 && this.state.seconds > 0) {
          this.setState({
            count: this.state.count - 1,
            minutes: parseInt(this.state.count / 60),
            seconds: this.state.count % 60,
            padd: "0",
            width: per + "%",
            colorBar: "#05a000"
          });
        } else {
          this.setState({
            count: this.state.count - 1,
            minutes: parseInt(this.state.count / 60),
            seconds: this.state.count % 60,
            padd: "",
            width: per + "%",
            colorBar: "#05a000"
          });
        }
      } else if (per >= 70 && per < 90) {
        if (this.state.seconds < 11 && this.state.seconds > 0) {
          this.setState({
            count: this.state.count - 1,
            minutes: parseInt(this.state.count / 60),
            seconds: this.state.count % 60,
            padd: "0",
            width: per + "%",
            colorBar: "#07db00"
          });
        } else {
          this.setState({
            count: this.state.count - 1,
            minutes: parseInt(this.state.count / 60),
            seconds: this.state.count % 60,
            padd: "",
            width: per + "%",
            colorBar: "#07db00"
          });
        }
      } else if (per >= 90 && per < 95) {
        if (this.state.seconds < 11 && this.state.seconds > 0) {
          this.setState({
            count: this.state.count - 1,
            minutes: parseInt(this.state.count / 60),
            seconds: this.state.count % 60,
            padd: "0",
            width: per + "%",
            colorBar: "#ff8800"
          });
        } else {
          this.setState({
            count: this.state.count - 1,
            minutes: parseInt(this.state.count / 60),
            seconds: this.state.count % 60,
            padd: "",
            width: per + "%",
            colorBar: "#ff8800"
          });
        }
      } else {
        if (this.state.seconds < 11 && this.state.seconds > 0) {
          this.setState({
            count: this.state.count - 1,
            minutes: parseInt(this.state.count / 60),
            seconds: this.state.count % 60,
            padd: "0",
            width: per + "%",
            colorBar: "#ca0000"
          });
        } else {
          this.setState({
            count: this.state.count - 1,
            minutes: parseInt(this.state.count / 60),
            seconds: this.state.count % 60,
            padd: "",
            width: per + "%",
            colorBar: "#ca0000"
          });
        }
      }
    }, 1000);
  }
}

export default App;
