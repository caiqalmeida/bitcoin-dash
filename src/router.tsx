import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
// import Layout from "./layout";
import { Home } from "./pages";
import { ROUTES } from "./constants/routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Layout> */}
        <Route exact path={ROUTES.HOME} component={Home} />
        {/* </Layout> */}
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
