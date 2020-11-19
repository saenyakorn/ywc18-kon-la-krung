import { Col, Row, Typography } from "antd"
import React, { useMemo } from "react"

import "./main.style.less"

import SidebarComponent from "../components/sidebar.component"
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
      <MainNavbarComponent />
      <SubNavbarComponent />
      <div className="container">
        <Title level={4} className="header">
          {currentTitle}
        </Title>
        <Row gutter={16}>
          <Col xs={0} md={6}>
            <SidebarComponent />
          </Col>
          <Col xs={24} md={18}>
            <CardListComponent />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default MainPage
