import React from "react"
import { Menu } from "antd"
import { useDataCenterContext } from "../controllers/dataCenter.controller"

export interface ProvinceMenuProps {}

export default function ProvinceMenuComponent() {
  const { provinces } = useDataCenterContext()

  return (
    <Menu>
      {provinces &&
        provinces.map((province, index) => (
          <Menu.Item key={`provinces-${index}`}>{province}</Menu.Item>
        ))}
    </Menu>
  )
}
