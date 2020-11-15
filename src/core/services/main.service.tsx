import { httpClient } from "./utils"

export const getCatagories = () => {
  return httpClient.get("/")
}
