import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Games from './Pages/Games';
import Home from './Pages/Home';
import LeaderBoard from './Pages/LeaderBoard';
import NotFound from "./Pages/NotFound";
import Play from './Pages/Play';
import './Styles/App.css';

function App() {
  return (
    <Router basename='/'>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Games} path="/games" />
        <Route component={Play} path="/play/:id" />
        <Route component={LeaderBoard} path="/leaderboard/:id" />
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
