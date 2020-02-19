import React, { Component } from "react";
import "./table.css";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
import { connect } from "react-redux";
class MoviesTable extends Component {
  columns = [
    { path: "rank", label: "Rank" },
    { path: "teamName", label: "Team Name" },
    { path: "q1", label: "Q1" },
    { path: "q2", label: "Q2" },
    { path: "q3", label: "Q3" },
    { path: "q4", label: "Q4" },
    { path: "q5", label: "Q5" },
    { path: "q6", label: "Q6" },
    { path: "score", label: "Score" }
  ];

  render() {
    console.log(this.props.minutes);
    const { newTable, teams, search } = this.props;
    if (this.props.minutes < 15) {
      return (
        <React.Fragment>
          <div className="sanTable2">
            <img src="/lock.svg" className="lockImage"></img>
          </div>
          <table className="table sanTable3 borderless">
            <TableHeader columns={this.columns} />
            <TableBody
              data={newTable}
              columns={this.columns}
              teams={teams}
              search={search}
            />
          </table>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="sanTable1"></div>
          <table className="table sanTable borderless">
            <TableHeader columns={this.columns} />
            <TableBody
              data={newTable}
              columns={this.columns}
              teams={teams}
              search={search}
            />
          </table>
        </React.Fragment>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    seconds: state.root.seconds,
    minutes: state.root.minutes,
    hours: state.root.hours
  };
};
export default connect(mapStateToProps)(MoviesTable);
