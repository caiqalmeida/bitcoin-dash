import axios from "axios";

import { SigninParameters, SignupParameters } from "../types/api";

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

export const authorize = (token: string) => {
  api.interceptors.request.use((config) => {
    const newConfig = config;
    newConfig.headers.Authorization = `Bearer ${token}`;

    return newConfig;
  });
};

export function getBalance() {
  return api.get("/account/balance").then((res) => res.data.balance);
}

export default api;
