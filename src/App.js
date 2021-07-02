import "./App.scss";
import phonePeople from "./people";

import { Route, Switch, Redirect } from "react-router-dom";

import { useState, useEffect } from "react";

import { People } from "./components/People";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Call } from "./components/Call";

function App() {
  const [people, setPeople] = useState(phonePeople ?? phonePeople);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header people={people} />
          <People people={people} />
        </Route>

        <Route exact path="/search">
          <Search people={people} />
        </Route>

        <Route exact path="/call/:id">
          <Call people={people} />
        </Route>

        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;
