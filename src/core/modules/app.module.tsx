import React from "react"
import RouteModule from "./router.module"
import { BrowserRouter } from "react-router-dom"
import DataCenterProvider from "../controllers/dataCenter.controller"

const AppModule: React.FC = () => {
  console.log(process.env.PUBLIC_URL)
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <DataCenterProvider>
        <RouteModule />
      </DataCenterProvider>
    </BrowserRouter>
  )
}

export default AppModule
