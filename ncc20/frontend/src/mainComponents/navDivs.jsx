import React, { Component } from "react";
import { Redirect } from "react-router";

class NavDivs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      classSub: "",
      classQue: "",
      classLeader: ""
    };
  }

  handleClick = d => {
    this.props.changeColor(d);
    this.setState({
      redirect: true
    });
  };

  render() {
    const { imgSrc, styling } = this.props;
    let division;
    let name;
    if (imgSrc === "/ctd.png") division = "Credenz Tech Dayz";
    else if (imgSrc === "/Question.png") {
      division = "question";
      name = "Question Hub";
    } else if (imgSrc === "/iconLeader.png") {
      division = "leaderboard";
      name = "Leaderboard";
    } else if (imgSrc === "/submissions.png") {
      division = "submission";
      name = "Submissions";
    } else {
      division = "modal";
      name = "Log Out";
    }

    if (imgSrc === "/ctd.png") {
      return (
        <div className="row" style={styling}>
          <img
            src="/ctd.png"
            alt={`${division}`}
            style={{ height: "15vh", width: "13vw" }}
          />
        </div>
      );
    } else {
      if (this.state.redirect === true) {
        this.setState({
          redirect: false
        });
        return <Redirect push to={`/${division}`} />;
      }
      return (
        <div
          className={`row links ${this.props.option}`}
          onClick={() => this.handleClick(division)}
        >
          <img src={`${imgSrc}`} alt={`${division}`} style={styling} />
          <span>{name}</span>
        </div>
      );
    }
  }
}

export default NavDivs;
