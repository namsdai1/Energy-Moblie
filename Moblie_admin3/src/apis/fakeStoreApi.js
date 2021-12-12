import axios from "axios";

export const shop = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const store = axios.create({
  baseURL: "http://localhost:3000",
});
