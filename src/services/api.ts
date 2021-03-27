import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:3333/api",
  headers: { "Content-Type": "application/json" },
});

export function setAuthHeader(token: string): void {
  API.interceptors.request.use((req) => {
    req.headers.Authorization = `Bearer ${token}`;
    return req;
  });
}
