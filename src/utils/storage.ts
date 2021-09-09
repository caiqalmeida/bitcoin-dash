const STORAGE_KEY = "user_token";

export const getUserToken = () =>
  JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "");

export const setUserToken = (token: string) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(token));

export const removeUserToken = () => localStorage.removeItem(STORAGE_KEY);
