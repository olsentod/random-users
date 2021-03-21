import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { add } from "./features/users/usersSlice";
import { Users } from "./features/users/Users";
import { User } from "./features/users/User";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const firstBatch = await axios.get(
        "https://randomuser.me/api/?results=200"
      );
      dispatch(add(firstBatch.data.results));
      const secondBatch = await axios.get(
        "https://randomuser.me/api/?results=1800"
      );
      dispatch(add(secondBatch.data.results));
      const finalBatch = await axios.get(
        "https://randomuser.me/api/?results=5000"
      );
      dispatch(add(finalBatch.data.results));
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <div id="app">
        <Switch>
          <Route exact path="/:id">
            <User />
          </Route>
          <Route exact path="/">
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
