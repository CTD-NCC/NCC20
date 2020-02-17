import React, { Component } from "react";
import "./button.css";
import "./mytable.css";
import { Link } from "react-router-dom";

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
  }

  handleClick = () => {
    this.setState({
      redirect: true
    });
  };

  render() {
    const newTo = {
      pathname: "/coding",
      param2: this.props.Srno
    };
    // if (this.state.redirect === true) {
    //   return <Link to="/coding" />;
    // }
    return (
      <Link to={newTo}>
        <button className="butView">Attempt</button>
      </Link>
    );
  }
}

export default Button;
