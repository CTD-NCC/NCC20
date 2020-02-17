import React, { Component } from "react";
import { getDataBase } from "../services/dbFake";
import _ from "lodash";
import { paginate } from "../utils/paginate";
import Pagination from "./common/Pagination";
import Table from "./table";
import Search from "./Search";
import "./finalBoard.css";
class FinalBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      teams1: [],
      pageSize: 8,
      currentPage: 1
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }
  componentDidMount() {
    this.setState({ teams: getDataBase(), teams1: getDataBase() });
  }
  handlePageChange = page => {
    const updateState = this.state;
    updateState.currentPage = page;
    this.setState({ state: updateState });
  };
  onSearch = val => {
    const updateState = this.state;
    this.state.teams.forEach(item => {
      if (item.teamName === val) {
        //console.log(item.rank);
        updateState.currentPage =
          Math.floor(item.rank / this.state.pageSize) + 1;
      }
    });
    this.setState({ state: updateState });
  };
  render() {
    const { length: count } = this.state.teams; //Object Destructuring
    const { pageSize, currentPage, teams, search } = this.state;
    const newTable = paginate(teams, currentPage, pageSize);
    return (
      <main className="container">
        <div className="row">
          <div className="row" style={{ margin: "8vh" }}>
            <Search teams={teams} onSearch={this.onSearch} />
          </div>
          <Table teams={teams} newTable={newTable} search={search} />
          <Pagination
            itemsCount={teams.length}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </main>
    );
  }
}

export default FinalBoard;
