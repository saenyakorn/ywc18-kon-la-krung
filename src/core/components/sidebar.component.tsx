import { Card, Typography } from "antd"
import React from "react"

import "./sidebar.style.less"

import ShopRadioGroupComponent from "./radioGroup/shop.component"
import ProvinceSelectComponent from "./select/province.component"
import CategoriesRadioGroupComponent from "./radioGroup/categories.component"
import PriceSelectComponent from "./select/price.component"
import { useSearchContext } from "../controllers/search.controller"

// constants
import { DEFAULT_SHOP } from "../constants/defaultValue"

const { Title } = Typography

export interface SidebarProps {}

export default function SidebarComponent() {
  const { selectedShop } = useSearchContext()
  return (
    <Card className="sidebar">
      <Title level={5}>ประเภทร้านค้า</Title>
      <ShopRadioGroupComponent />
      <Title level={5}>จังหวัด/ใกล้ฉัน</Title>
      <ProvinceSelectComponent />
      <Title level={5}>ราคา</Title>
      <PriceSelectComponent />
      {selectedShop !== DEFAULT_SHOP && (
        <>
          <Title level={5}>ประเภท{selectedShop}</Title>
          <CategoriesRadioGroupComponent />
        </>
      )}
    </Card>
  )
}
