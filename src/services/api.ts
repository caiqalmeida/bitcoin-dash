import axios from "axios";

import { SigninParameters, SignupParameters } from "../types/api";
import { getUserToken } from "../utils/storage";

const api = axios.create({
  baseURL: "https://desafio-api.devzz.ninja",
});

export function signUp({ name, email, password }: SignupParameters) {
  return api.post("/account", { name, email, password }).then((res) => {
    return res.data;
  });
}

export function signIn({ email, password }: SigninParameters) {
  return api.post("/login", { email, password }).then((res) => {
    return res.data.token;
  });
}

export function getBalance() {
  const token = getUserToken();
  return api
    .get("/account/balance", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data.balance);
}

export default api;
