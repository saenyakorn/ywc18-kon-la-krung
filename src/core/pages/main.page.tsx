import { Col, Row } from "antd"
import React from "react"
import DropdownComponent from "../components/dropdown.component"

const MainPage = () => {
  return (
    <>
      <Row gutter={16}>
        <Col span={4}>
          <DropdownComponent />
        </Col>
        <Col span={8}></Col>
      </Row>
    </>
  )
}

export default MainPage
