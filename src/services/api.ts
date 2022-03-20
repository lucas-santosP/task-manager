import axios from "axios";

const API_URL = import.meta.env.PROD
  ? import.meta.env.VITE_API_URL_PROD
  : import.meta.env.VITE_API_URL;

export const API = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export function setAPIAuthHeader(token: string) {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
