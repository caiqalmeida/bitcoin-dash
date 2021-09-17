const STORAGE_KEY = "user";

export const getUserToken = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "");
  } catch (err) {
    return null;
  }
};

export const setUserToken = (token: string) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(token));

export const removeUserToken = () => localStorage.removeItem(STORAGE_KEY);
