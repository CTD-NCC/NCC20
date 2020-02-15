import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import _ from "lodash";

import Login from "./pages/Login/Login";
import Leaderboard from "./pages/LeaderBoard/leaderboard";
import QuestionHub from "./pages/Question Hub/QuestionHub";
import Submission from "./pages/Submissions/App";
import Result from "./pages/Result/ResultPage";
import Coding from "./pages/Coding Page/coding";
import RenderTestPage from "./pages/Testcases/RenderTestPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/result" component={Result} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/submission" component={Submission} />
        <Route path="/testcases" component={RenderTestPage} />
        <Route path="/coding" component={Coding} />
        <Route path="/question" component={QuestionHub} />
        <Route path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
