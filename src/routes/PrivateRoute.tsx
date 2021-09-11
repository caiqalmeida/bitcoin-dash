import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

import { getUserToken } from "../utils/storage";
import { paths } from "./routes";

export const PrivateRoute = ({ children, ...props }: RouteProps) => {
  const token = getUserToken();

  const render = () =>
    token ? children : <Redirect to={{ pathname: paths.login }} />;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...props} render={render} />;
};
