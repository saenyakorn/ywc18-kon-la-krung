import { Breadcrumb } from "antd"
import React from "react"

import "./navbar.style.less"

export interface SubNavbarProps {}

export default function SubNavbarComponent() {
  return (
    <div className="navbar-container bg-blue">
      <Breadcrumb className="navbar-item">
        <Breadcrumb.Item>
          <a href="https://www.xn--42caj4e6bk1f5b1j.com/" target="_blank" rel="noreferrer">
            หน้าแรก
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>ค้นหา</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}
