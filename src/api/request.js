import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000"

export function getData(path) {
  return axios.get(path)
}