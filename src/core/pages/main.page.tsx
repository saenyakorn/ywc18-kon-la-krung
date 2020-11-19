import { Typography } from "antd"
import React, { useMemo } from "react"

import "./main.style.less"

import SidebarComponent from "../components/optionBar.component"
import { useSearchContext } from "../controllers/search.controller"
import CardListComponent from "../components/card/cardList.component"
import SubNavbarComponent from "../components/navbar/subNavbar.component"
import MainNavbarComponent from "../components/navbar/mainNavbar.component"
import { DEFAULT_SHOP } from "../constants/defaultValue"

const { Title } = Typography

const MainPage = () => {
  const { selectedShop } = useSearchContext()

  const currentTitle = useMemo(
    () => `ผลการค้นหา ${selectedShop} ${selectedShop !== DEFAULT_SHOP ? DEFAULT_SHOP : ""}`,
    [selectedShop]
  )

  return (
    <>
      <div className="static-bg"></div>
      <MainNavbarComponent />
      <SubNavbarComponent />
      <div className="main-container">
        <Title level={4} className="header">
          {currentTitle}
        </Title>
        <div className="component-container">
          <div className="responsive-sidebar">
            <SidebarComponent />
          </div>
          <div className="responsive-cardlist">
            <CardListComponent />
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage
