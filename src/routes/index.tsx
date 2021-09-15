import React from "react";
import { Switch, BrowserRouter, Route as PublicRoute } from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { routes } from "./routes";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(
          ({
            path,
            page: Page,
            auth = false,
            Route = auth ? PrivateRoute : PublicRoute,
          }) => (
            <Route path={path} exact key={`route-${path}`}>
              <Page />
            </Route>
          )
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
