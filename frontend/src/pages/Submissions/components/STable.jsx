import React, { Component } from "react";

import STableHeader from "./STableHeader";
import STableBody from "./STableBody";
import axios from "axios";

class MoviesTable extends Component {
  columns = [
    { path: "qn", label: "Sr. No." },
    // { path: "title", label: "Question" },
    { path: "time", label: "Time" },
    { path: "status", label: "Success Rate" },
    { path: "response", label: "Question" }
  ];



    render() {
    const { newTable, submissions } = this.props;
    return (
      <table className="table sanTable borderless sTable">
        <STableHeader columns={this.columns} />
        <STableBody
          data={newTable}
          columns={this.columns}
          submissions={submissions}
        />
      </table>
    );
  }
}

export default MoviesTable;
