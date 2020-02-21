import React, { Component } from "react";
import "./button.css";
import "./mytable.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
  }

  handleClick = () => {

    this.props.updateNo(this.props.Srno);
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
        <button className="butView" onClick = {this.handleClick}>Attempt</button>
      </Link>
    );
  }
}

const mapStateToProps = state => {
  return {
    qno : state.coding.qno
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateNo: qno => {
      dispatch({ type: "UPDATE_NO", qno : qno });
    },

  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Button);
