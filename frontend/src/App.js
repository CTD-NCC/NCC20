import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import _ from "lodash";
import Login from "./pages/Login/Login";
import Leaderboard from "./pages/LeaderBoard/leaderboard";
import QuestionH from "./pages/Question Hub/components/MainTable";
import Result from "./pages/Result/ResultPage";
import Coding from "./pages/Coding Page/coding";
import Navbar from "./mainComponents/Navbar";
import Footer from "./mainComponents/footer";
import Modal from "./mainComponents/modal";
import Testcases from "./pages/Testcases/testcases";
import SubmissionPage from "./pages/Submissions/SubmissionPage";

class App extends Component {
  state = {};

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/result" component={Result} />
          <Route exact path="/" component={Login} />
          <div className="container-fluid">
            <div className="row" style={{ height: "93vh" }}>
              <Navbar loc={this.props.location} />
              <div className="col-sm-10">
                {/* <div className="row" style={{ height: "7vh" }}>
              <Title title="Testcases"></Title>
            </div> */}
                <div className="row" style={{ height: "93vh" }}>
                  <Route exact path="/modal" component={Modal}></Route>
                  <Route path="/leaderboard" component={Leaderboard} />
                  <Route path="/submission" component={SubmissionPage} />
                  <Route path="/testcases" component={Testcases} />
                  <Route path="/coding" component={Coding} />
                  <Route path="/question" component={QuestionH} />
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
