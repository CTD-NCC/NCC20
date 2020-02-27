import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class STableHeader extends Component {
  handleSelect = e => {
   const username = localStorage.getItem('Username');
  
    axios({
      method: "get",
      url: "http://"+`${this.props.url}`+"/submission/",
      params: {
        qn: e.currentTarget.selectedIndex + 1
      },
      headers: {
        Username: username
      }
    }).then(response => {
      this.props.updateSubmission(response.data);
    });
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column =>
            column.label !== "Question" ? (
              <th key={column.path || column.key}>{column.label}</th>
            ) : (
              <th>
                <select
                  onChange={this.handleSelect}
                  className={"custom-select"}
                  style={{ width: "11vw" }}
                  id="question"
                >
                  <option value={"1"}>Question 1</option>
                  <option value={"2"}>Question 2</option>
                  <option value={"3"}>Question 3</option>
                  <option value={"4"}>Question 4</option>
                  <option value={"5"}>Question 5</option>
                  <option value={"6"}>Question 6</option>
                </select>
              </th>
            )
          )}
        </tr>
      </thead>
    );
  }
}
const mapStateToProps = state => {
  return {
    username: state.root.userName,
    qn: state.submission.qn,
    submissions: state.submission.submissions,
    url : state.Url.url
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateQN: qn =>
      dispatch({
        type: "UPDATE_QNO",
        qn: qn
      }),
    updateSubmission: submissions =>
      dispatch({
        type: "UPDATE_SUB",
        submissions: submissions
      })
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(STableHeader);
