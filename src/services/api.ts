import axios from "axios";

const API_URL =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_URL_PROD;

export const API = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export function setAPIAuthHeader(token: string) {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
