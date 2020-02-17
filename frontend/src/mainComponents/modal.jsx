import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./modal.css";

class Mwaiting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ret: false,
      logout: false
    };
  }
  handleReturn = () => {
    this.setState({ ret: true });
  };
  handleLogout = () => {
    this.setState({ logout: true });
  };
  render() {
    if (this.state.ret === true) {
      this.setState({ ret: false });
      return <Redirect push to="/coding" />;
    } else if (this.state.logout === true)
      return <Redirect push to="/result" />;
    return (
      <div className="ModalClass">
        <div className="MainModal">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2vh",
              fontSize: "30px"
            }}
          >
            <p>Do you wish to exit the game?</p>
          </div>
          <div
            style={{
              fontSize: "20px",
              display: "flex",
              justifyContent: "center",
              marginTop: "1vh"
            }}
          >
            <p>
              Your progress till this point in time will be saved and you will
              be logged out.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1vh"
            }}
          >
            <button
              className="btn btn-success"
              style={{
                width: "15vw",
                height: "8vh",
                margin: "2vw",
                fontSize: "20px"
              }}
              onClick={() => this.handleReturn()}
            >
              Return to Game
            </button>
            <button
              className="btn btn-danger"
              style={{
                width: "15vw",
                height: "8vh",
                margin: "2vw",
                fontSize: "20px"
              }}
              onClick={() => this.handleLogout()}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Mwaiting;
