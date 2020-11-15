import axios from "axios"

export const httpClient = axios.create({
  baseURL: "https://panjs.com/ywc18.json",
  timeout: 5000
})
