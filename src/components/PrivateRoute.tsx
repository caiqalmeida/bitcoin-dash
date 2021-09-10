import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

import { getUserToken } from "../utils/storage";
import { ROUTES } from "../constants/routes";

export const PrivateRoute = ({ children, ...props }: RouteProps) => {
  // const token = getUserToken();
  const token = null;

  const render = () =>
    token ? children : <Redirect to={{ pathname: ROUTES.LOGIN }} />;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...props} render={render} />;
};
