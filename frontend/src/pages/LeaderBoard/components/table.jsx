import React, { Component } from "react";
import "./table.css";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
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
    const { newTable, teams, search } = this.props;
    return (
      <table className="table sanTable borderless">
        <TableHeader columns={this.columns} />
        <TableBody
          data={newTable}
          columns={this.columns}
          teams={teams}
          search={search}
        />
      </table>
    );
  }
}

export default MoviesTable;
