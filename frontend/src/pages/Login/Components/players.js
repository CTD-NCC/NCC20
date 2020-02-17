import React, { Component } from "react";
import "../styles/players.css";

class players extends Component {
  constructor(props) {
    super(props);

    this.state = {
      class: "",
      positionPn1: this.props.player1name === "" ? "Downn" : "Upp",
      positionPc1: this.props.player1contact === "" ? "Downn" : "Upp",
      positionPe1: this.props.player1email === "" ? "Downn" : "Upp",
      positionPn2: this.props.player2name === "" ? "Downn" : "Upp",
      positionPc2: this.props.player2contact === "" ? "Downn" : "Upp",
      positionPe2: this.props.player2email === "" ? "Downn" : "Upp",
      errorpn1: "",
      errorpc1: "",
      errorpe1: "",
      errorpn2: "",
      errorpc2: "",
      errorpe2: "",
      labelpc1: "Contact Number",
      labelpc1color: "",
      labelpc2: "Contact Number",
      labelpc2color: "",
      labelpe1: "Email",
      labelpe1color: "",
      labelpe2: "Email",
      labelpe2color: "",
      va1: 0,
      va2: 0,
      va3: 0,
      va4: 0,
      va5: 0,
      va6: 0
    };
  }

  pl1nameChange(e) {
    this.props.updateValues("player1name", e.target.value);
  }

  pl1contactChange(e) {
    this.props.updateValues("player1contact", e.target.value);
  }

  pl1emailChange(e) {
    this.props.updateValues("player1email", e.target.value);
  }

  pl2nameChange(e) {
    this.props.updateValues("player2name", e.target.value);
  }

  pl2contactChange(e) {
    this.props.updateValues("player2contact", e.target.value);
  }

  pl2emailChange(e) {
    this.props.updateValues("player2email", e.target.value);
  }

  handleFocusPn1() {
    this.setState({
      positionPn1: "Upp"
    });
  }

  handleBlurPn1(e) {
    if (e.target.value === "") {
      this.setState({
        positionPn1: "Downn"
      });
    } else {
      this.setState({
        positionPn1: "Upp"
      });
    }
  }

  handleFocusPc1() {
    this.setState({
      positionPc1: "Upp"
    });
  }

  handleBlurPc1(e) {
    if (e.target.value === "") {
      this.setState({
        positionPc1: "Downn"
      });
    } else {
      this.setState({
        positionPc1: "Upp"
      });
    }
  }

  handleFocusPe1() {
    this.setState({
      positionPe1: "Upp"
    });
  }

  handleBlurPe1(e) {
    if (e.target.value === "") {
      this.setState({
        positionPe1: "Downn"
      });
    } else {
      this.setState({
        positionPe1: "Upp"
      });
    }
  }

  handleFocusPn2() {
    this.setState({
      positionPn2: "Upp"
    });
  }

  handleBlurPn2(e) {
    if (e.target.value === "") {
      this.setState({
        positionPn2: "Downn"
      });
    } else {
      this.setState({
        positionPn2: "Upp"
      });
    }
  }

  handleFocusPc2() {
    this.setState({
      positionPc2: "Upp"
    });
  }
  handleBlurPc2(e) {
    if (e.target.value === "") {
      this.setState({
        positionPc2: "Downn"
      });
    } else {
      this.setState({
        positionPc2: "Upp"
      });
    }
  }

  handleFocusPe2() {
    this.setState({
      positionPe2: "Upp"
    });
  }

  handleBlurPe2(e) {
    if (e.target.value === "") {
      this.setState({
        positionPe2: "Downn"
      });
    } else {
      this.setState({
        positionPe2: "Upp"
      });
    }
  }

  handleBack() {
    this.setState({
      class: "dissolve"
    });
    this.props.changeModeP();
  }

  handleClick(e) {
    e.preventDefault();
    var x1, x2, x3, x4, x5, x6;
    if (this.props.player1name === "") {
      x1 = 0;
      this.setState({
        errorpn1: "Border"
      });
    } else {
      x1 = 1;
      this.setState({
        va1: 1,
        errorpn1: ""
      });
    }
    if (this.props.player1contact === "") {
      x2 = 0;
      this.setState({
        errorpc1: "Border"
      });
    } else {
      var x = this.props.player1contact;
      var y = parseInt(x);
      var z = 0;
      if (y / 1000000000 < 6) {
        z = 1;
      }
      if (!x.match(/^\d+$/) || x.length < 10 || z === 1) {
        this.setState({
          labelpc1: "Please enter a valid number",
          errorpc1: "Border",
          labelpc1color: "colorRed"
        });
        setTimeout(
          function ss() {
            this.setState({
              labelpc1: "Contact Number",
              errorpc1: "Border",
              labelpc1color: ""
            });
          }.bind(this),
          1500
        );
      } else {
        x2 = 1;
        this.setState({
          va2: 1,
          errorpc1: ""
        });
      }
    }

    if (this.props.player1email === "") {
      x3 = 0;
      this.setState({
        errorpe1: "Border"
      });
    } else {
      var content = this.props.player1email;
      if (
        (content.includes(".com") ||
          content.includes(".edu") ||
          content.includes(".co.in")) &&
        content.includes("@")
      ) {
        x3 = 1;
        this.setState({
          errorpe1: "",
          labelpe1: "Email",
          labelpe1color: ""
        });
      } else {
        x3 = 0;
        this.setState({
          va3: 0,
          errorpe1: "Border",
          labelpe1: "Please enter a valid Email ID",
          labelpe1color: "colorRed"
        });
        setTimeout(
          function st() {
            this.setState({
              errorpe1: "Border",
              labelpe1: "Email",
              labelpe1color: ""
            });
          }.bind(this),
          1500
        );
      }
    }
    if (this.props.player2name === "") {
      x4 = 0;
      this.setState({
        errorpn2: "Border"
      });
    } else {
      x4 = 1;
      this.setState({
        va4: 1,
        errorpn2: ""
      });
    }
    if (this.props.player2contact === "") {
      x5 = 0;
      this.setState({
        errorpc2: "Border"
      });
    } else {
      var x = this.props.player2contact;
      var y = parseInt(x);
      var z = 0;
      if (y / 1000000000 < 6) {
        z = 1;
      }
      if (!x.match(/^\d+$/) || x.length < 10 || z === 1) {
        this.setState({
          labelpc2: "Please enter a valid number",
          errorpc2: "Border",
          labelpc2color: "colorRed"
        });
        setTimeout(
          function ss() {
            this.setState({
              labelpc2: "Contact Number",
              labelpc2color: "",
              errorpc2: "Border"
            });
          }.bind(this),
          1500
        );
      } else {
        x5 = 1;
        this.setState({
          va5: 1,
          errorpc2: ""
        });
      }
    }
    if (this.props.player2email === "") {
      x6 = 0;
      this.setState({
        errorpe2: "Border"
      });
    } else {
      var content = this.props.player2email;
      if (
        (content.includes(".com") ||
          content.includes(".edu") ||
          content.includes(".co.in")) &&
        content.includes("@")
      ) {
        x6 = 1;
        this.setState({
          errorpe2: "",
          labelpe2: "Email",
          labelpe2color: ""
        });
      } else {
        x6 = 0;
        this.setState({
          va6: 0,
          errorpe2: "Border",
          labelpe2: "Please enter a valid Email ID",
          labelpe2color: "colorRed"
        });
        setTimeout(
          function st() {
            this.setState({
              errorpe2: "Border",
              labelpe2: "Email",
              labelpe2color: ""
            });
          }.bind(this),
          1500
        );
      }
    }
    if (
      (x1 === 1 && x2 === 1 && x3 === 1 && x4 === 0 && x5 === 0 && x6 === 0) ||
      (x1 === 1 && x2 === 1 && x3 === 1 && x4 === 1 && x5 === 1 && x6 === 1)
    ) {
      this.props.changeModePL();
    }
  }

  render() {
    return (
      <div className={this.state.class}>
        <form>
          <div className="player1">
            <div className="header">Player 1</div>
            <div className="in1 inputbox">
              <label className={`plname1 lab1 ${this.state.positionPn1}`}>
                Name
              </label>
              <input
                maxLength="50"
                autoComplete="new-password"
                type="text"
                className={`text ${this.state.errorpn1}`}
                onFocus={this.handleFocusPn1.bind(this)}
                onBlur={this.handleBlurPn1.bind(this)}
                onChange={this.pl1nameChange.bind(this)}
                value={this.props.player1name}
                spellCheck="false"
              ></input>
            </div>
            <div className="in2 inputbox">
              <label
                className={`plnum1 lab1 ${this.state.labelpc1color} ${this.state.positionPc1} `}
              >
                {this.state.labelpc1}
              </label>
              <input
                maxLength="10"
                autoComplete="new-password"
                type="text"
                className={`text ${this.state.errorpc1}`}
                onFocus={this.handleFocusPc1.bind(this)}
                onBlur={this.handleBlurPc1.bind(this)}
                onChange={this.pl1contactChange.bind(this)}
                value={this.props.player1contact}
                spellCheck="false"
              ></input>
            </div>
            <div className="in2 inputbox">
              <label
                className={`plemail1 lab1 ${this.state.positionPe1} ${this.state.labelpe1color}`}
              >
                {this.state.labelpe1}
              </label>
              <input
                maxLength="50"
                autoComplete="new-password"
                type="text"
                className={`text ${this.state.errorpe1}`}
                onFocus={this.handleFocusPe1.bind(this)}
                onBlur={this.handleBlurPe1.bind(this)}
                onChange={this.pl1emailChange.bind(this)}
                value={this.props.player1email}
                spellCheck="false"
              ></input>
            </div>
          </div>
          <div className="player2">
            <div className="header">Player 2</div>
            <div className="in1 inputbox">
              <label className={`plname2 lab2 ${this.state.positionPn2}`}>
                Name
              </label>
              <input
                maxLength="50"
                autoComplete="new-password"
                type="text inputbox"
                className={`text ${this.state.errorpn2}`}
                onFocus={this.handleFocusPn2.bind(this)}
                onBlur={this.handleBlurPn2.bind(this)}
                onChange={this.pl2nameChange.bind(this)}
                value={this.props.player2name}
                spellCheck="false"
              ></input>
            </div>
            <div className="in2 inputbox">
              <label
                className={`plnum2 lab2 ${this.state.positionPc2} ${this.state.labelpc2color}`}
              >
                {this.state.labelpc2}
              </label>
              <input
                maxLength="10"
                type="text"
                className={`text ${this.state.errorpc2}`}
                autoComplete="new-password"
                onFocus={this.handleFocusPc2.bind(this)}
                onBlur={this.handleBlurPc2.bind(this)}
                onChange={this.pl2contactChange.bind(this)}
                value={this.props.player2contact}
                spellCheck="false"
              ></input>
            </div>
            <div className="in2 inputbox">
              <label
                className={`plemail2 lab2 ${this.state.positionPe2} ${this.state.labelpe2color}`}
              >
                {this.state.labelpe2}
              </label>
              <input
                maxLength="50"
                type="text"
                className={`text ${this.state.errorpe2}`}
                autoComplete="new-password"
                onFocus={this.handleFocusPe2.bind(this)}
                onBlur={this.handleBlurPe2.bind(this)}
                onChange={this.pl2emailChange.bind(this)}
                value={this.props.player2email}
                spellCheck="false"
              ></input>
            </div>
          </div>
          <div className="Footer">
            <button className="back" onClick={this.handleBack.bind(this)}>
              BACK
            </button>
            <button
              type="submit"
              className="LLogin"
              onClick={this.handleClick.bind(this)}
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default players;
