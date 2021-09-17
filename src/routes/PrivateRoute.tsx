import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

import { getUserToken } from "../services/storage";
import { authorize } from "../services/api";
import { paths } from "./routes";

export const PrivateRoute = ({ children, ...props }: RouteProps) => {
  const token = getUserToken();

  if (token) {
    authorize(token);
  }

  const render = () =>
    token ? children : <Redirect to={{ pathname: paths.login }} />;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...props} render={render} />;
};
