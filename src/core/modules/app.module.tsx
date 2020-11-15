import React from "react"
import RouteModule from "./router.module"
import { BrowserRouter } from "react-router-dom"

const AppModule: React.FC = () => {
  console.log(process.env.PUBLIC_URL)
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <RouteModule />
      <div>woww</div>
    </BrowserRouter>
  )
}

export default AppModule
