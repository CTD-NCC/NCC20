import React, { Component } from "react";
import { getDataBase } from "../services/dbFake";
import _ from "lodash";
import { paginate } from "../utils/paginate";
import Pagination from "./common/Pagination";
import Table from "./table";
import Search from "./Search";
import "./finalBoard.css";
import axios from "axios";

class FinalBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      teams1: [],
      pageSize: 9,
      currentPage: 1,
      search: "",
      post: null
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.Searching = this.Searching.bind(this);

    this.Searching = this.Searching.bind(this);
  }
  componentDidMount() {
   // let Resp;

    // const url = "http://Sanket212000.pythonanywhere.com/leaderboard/";
    // let response = await fetch(url);
    // let data = await response.json();
    // console.log(data[0]);
    axios.get("http://Sanket212000.pythonanywhere.com/leaderboard/").then(
      response=>{
        this.setState({
          teams: response.data,
          teams1: response.data,
          post: "fetched"
        });
      }
    )
    
    //console.log(this.state.teams[0].score);
    // axios
    //   .get("http://sanket212000.pythonanywhere.com/leaderboard/")
    //   .then(response => {
    //     console.log(response.data);

    //     this.setState({
    //       teams: response.data,
    //       teams1: response.data

    //     });

    //   });
    // console.log(Resp);

    //console.log(this.state.teams);
  }
  componentDidUpdate() {
    this.state.teams.forEach(item => {
      item.color = "nonTrans";
    });
  }
  handlePageChange = page => {
    const updateState = this.state;
    updateState.currentPage = page;
    this.setState({ state: updateState });
  };

  Searching(e) {
    this.setState({ search: e.target.value });
    if (e.target.value === "") {
      this.state.teams.forEach(item => {
        item.color = "nonTrans";
      });
    }
    this.setState({
      teams: this.state.teams
    });
  }
  onSearch = val => {
    const updateState = this.state;
    this.state.teams.forEach((item, index) => {
      if (item.teamName === val) {
        //console.log(item.rank);
        updateState.currentPage = Math.floor(index / this.state.pageSize) + 1;
        item.color = "trans";
      }
    });
    updateState.teams = this.state.teams;
    this.setState({ state: updateState });
  };
  render() {
    if (this.state.post === null) return null;
    else {
      console.log(this.state.teams[5].score);
      this.state.teams.forEach((item, index) => {
        item.rank = index + 1;
      });
      //const { length: count } = this.state.teams; //Object Destructuring
      const { pageSize, currentPage, teams, search } = this.state;
      const newTable = paginate(teams, currentPage, pageSize);
      return (
        <main className="container nicheJaa">
          <div className="row">
            <div className="row" style={{ margin: "8vh" }}>
              <Search
                teams={teams}
                onSearch={this.onSearch}
                search={search}
                Searching={this.Searching}
              />
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
}

export default FinalBoard;
