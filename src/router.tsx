import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
// import Layout from "./layout";
import { PrivateRoute } from "./components/PrivateRoute";
import { Home, Login } from "./pages";
import { ROUTES } from "./constants/routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Layout> */}
        <Route exact path={ROUTES.LOGIN} component={Login} />
        <PrivateRoute exact path={ROUTES.HOME} component={Home} />
        {/* </Layout> */}
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
