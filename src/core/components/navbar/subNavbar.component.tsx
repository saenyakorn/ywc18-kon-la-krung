import { Breadcrumb } from "antd"
import React from "react"

import "./navbar.style.less"

export interface SubNavbarProps {}

export default function SubNavbarComponent() {
  return (
    <div className="navbar-container bg-blue">
      <Breadcrumb className="navbar-item ">
        <Breadcrumb.Item>หน้าแรก</Breadcrumb.Item>
        <Breadcrumb.Item>ค้นหา</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}
