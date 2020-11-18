import { httpClient } from "./utils"

export const getAllData = async () => {
  return (await httpClient.get("/")).data
}
