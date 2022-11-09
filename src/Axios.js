import axios from "axios";

export const Axios = axios.create({
//   baseURL: "https://secret-peak-44632.herokuapp.com/",
  baseURL: "http://localhost:8000/",
});