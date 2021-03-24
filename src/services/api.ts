import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:3333/api",
  headers: { "Content-Type": "application/json" },
});
