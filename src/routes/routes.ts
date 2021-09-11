import React from "react";

import { Home, Login } from "../pages";

export interface Routes {
  page: React.FC;
  path: string;
  auth: boolean;
  Route?: React.FC;
}

export const paths = {
  login: "/",
  home: "/home",
};

export const routes: Routes[] = [
  {
    page: Login,
    path: paths.login,
    auth: false,
  },
  {
    page: Home,
    path: paths.home,
    auth: true,
  },
];
