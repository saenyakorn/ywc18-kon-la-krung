import React from "react"
import RouteModule from "./router.module"
import { BrowserRouter } from "react-router-dom"
import DataCenterProvider from "../controllers/dataCenter.controller"
import SearchProvider from "../controllers/search.controller"

const AppModule: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <DataCenterProvider>
        <SearchProvider>
          <RouteModule />
        </SearchProvider>
      </DataCenterProvider>
    </BrowserRouter>
  )
}

export default AppModule
