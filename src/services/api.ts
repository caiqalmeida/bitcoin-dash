import axios from "axios";

import { SigninParameters, SignupParameters } from "../types/api";

const api = axios.create({
  baseURL: "https://desafio-api.devzz.ninja",
});

export function signUp({ name, email, password }: SignupParameters) {
  return api
    .post("/account", { name, email, password })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw error;
    });
}

export function signIn({ email, password }: SigninParameters) {
  return api
    .post("/login", { email, password })
    .then((res) => {
      return res.data.token;
    })
    .catch((error) => {
      throw error;
    });
}

export default api;
