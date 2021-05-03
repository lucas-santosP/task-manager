import axios from "axios";

export const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { "Content-Type": "application/json" },
});

export function setAPIAuthHeader(token: string) {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
