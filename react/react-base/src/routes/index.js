import React from "react";
<<<<<<< HEAD
import { Switch } from "react-router-dom";
=======
import { Switch, Route } from "react-router-dom";
>>>>>>> 2b53ddc (update)

import MyRoute from "./MyRoute";
import Login from "../pages/Login";
import Page404 from "../pages/Page404";

export default function Routes() {
  return (
    <Switch>
<<<<<<< HEAD
      <MyRoute exact path="/" component={Login} />
      <MyRoute path="*" component={Page404} />
    </Switch>
=======
      <Route exact path="/" component={Login} />
      <Route path="*" component={Page404} />
    </Switch>

>>>>>>> 2b53ddc (update)
  );
}
