import { Col, Row, Typography } from "antd"
import React, { useMemo } from "react"

import "./main.style.less"

import SidebarComponent from "../components/sidebar.component"
import { useSearchContext } from "../controllers/search.controller"
import CardListComponent from "../components/card/cardList.component"

const { Title } = Typography

const MainPage = () => {
  const { currentShop } = useSearchContext()

  const currentTitle = useMemo(
    () => `ผลการค้นหา ${currentShop} ${currentShop !== "ทั้งหมด" ? "ทั้งหมด" : ""}`,
    [currentShop]
  )

  return (
    <div className="container">
      <Title level={4}>{currentTitle}</Title>
      <Row gutter={16}>
        <Col xs={0} md={6}>
          <SidebarComponent />
        </Col>
        <Col xs={24} md={18}>
          <CardListComponent />
        </Col>
      </Row>
    </div>
  )
}

export default MainPage
