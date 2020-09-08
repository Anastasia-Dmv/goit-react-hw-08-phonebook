import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeView from "../../views/HomeView";
import routes from "../utils/utils";
import LoginView from "../../views/LoginView";
import RegisterView from "../../views/RegisterView";
//import AppBar from "./Navigation";
import Navigation from "./Navigation";
import App from "./App";
import AuthNav from "./AuthNav";

export default function AppNew() {
  return (
    <div>
      <Navigation />
      <AuthNav />
      <Switch>
        <Route exact path={routes.home} component={HomeView} />
        <Route path={routes.login} component={LoginView} />
        <Route path={routes.register} component={RegisterView} />
        <Route path={routes.contacts} component={App} />

        {/* <Route component={NotFoundView} /> */}
      </Switch>
    </div>
  );
}
