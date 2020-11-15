import React from "react"
import { Route, Switch } from "react-router-dom"

// All Pages
import MainPage from "../pages/main.page"

const RouteModule: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
    </Switch>
  )
}

export default RouteModule
