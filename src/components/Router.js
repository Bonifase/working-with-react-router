import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Recipe from "./Recipe";
import App from "../App";

const Router = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/recipe/:id" component={Recipe} />
        <Route path="/" component={Recipe} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Router;
