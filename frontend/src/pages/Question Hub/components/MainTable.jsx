import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { getQuestions } from "../services/qdatabase";
import Button from "./button";
import "./mytable.css";

class QuestionH extends Component {
  constructor() {
    super();
    this.state = {
      questions: getQuestions()
    };
  }

  render() {
    return (
      <div className="tdiv">
        {/* <h1>table created</h1> */}
        <table
          className="table mytable table-striped table-hover borderless"
          style={{ borderTop: "none" }}
        >
          <thead style={{ borderTop: "none", borderBottom: "none" }}>
            <tr style={{ borderTop: "none", borderBottom: "none" }}>
              <th>Sr No.</th>
              <th>Title</th>
              <th>Submissions</th>
              <th>Accuracy</th>
              <th>Attempt</th>
            </tr>
          </thead>
          <tbody>
            {this.state.questions.map(question => (
              <tr>
                <td className="align-middle">{question.sn}</td>
                <td className="align-middle">{question.title}</td>
                <td className="align-middle">{question.subm}</td>
                <td className="align-middle">
                  {/* {question.accuracy} */}
                  <div className="progress pbar">
                    <div
                      className="progress-bar inner-pbar "
                      style={{ width: question.accuracy }}
                    >
                      {question.accuracy}
                    </div>
                  </div>
                </td>
                <td>
                  <Button />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default QuestionH;
