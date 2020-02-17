import React, { Component } from "react";
import { getSubmissions } from "../services/sdatabase.js";
import "./STable.css";
import _ from "lodash";
import Pagination from "./common/Pagination.jsx";
import { paginate } from "../utils/paginate.js";
import STable from "../components/STable";

class STableFinal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submissions: getSubmissions(),
      pageSize: 9,
      currentPage: 1
    };
  }
  handlePageChange = page => {
    const updateState = this.state;
    updateState.currentPage = page;
    this.setState({ state: updateState });
  };

  render() {
    const newTable = paginate(
      this.state.submissions,
      this.state.currentPage,
      this.state.pageSize
    );
    return (
      <main className="container">
        <div className="row">
          <STable submissions={this.state.submissions} newTable={newTable} />
          <Pagination
            className="pagStyle"
            itemsCount={this.state.submissions.length}
            pageSize={this.state.pageSize}
            onPageChange={this.handlePageChange}
            currentPage={this.state.currentPage}
          />

          {/* <Pagination /> */}
        </div>
      </main>
    );
  }
}

export default STableFinal;
