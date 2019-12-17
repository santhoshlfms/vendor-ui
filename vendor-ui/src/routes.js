import React from "react";
import { Route, Switch } from "react-router-dom";

//import serverUrl from './config'

import Layout from "./components/Layout/Layout";
import Authentication from "./components/Authentication/Authentication";
import Search from "./components/Search/Search";
import Error from "./components/Error/Error";
const routes = (
  <Switch>
    <Route exact path="/" component={Authentication} />
    <Route exact path="/dashboard" component={Layout} />
    <Route exact path="/search" component={Search} />
    <Route component={Error} />
  </Switch>
);
export default routes;
