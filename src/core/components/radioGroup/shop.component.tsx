import React, { useCallback } from "react"
import { Radio } from "antd"
import { RadioChangeEvent } from "antd/lib/radio"
import { useDataCenterContext } from "../../controllers/dataCenter.controller"
import { useSearchContext } from "../../controllers/search.controller"

import "./radioGroup.style.less"
import { DEFAULT_SHOP } from "../../constants/defaultValue"

export interface ShopRadioGroupProps {}

export default function ShopRadioGroupComponent() {
  const { categories } = useDataCenterContext()
  const { selectedShop, setSelectedValue } = useSearchContext()

  const toggleRadio = useCallback(
    (e: RadioChangeEvent) => {
      setSelectedValue("shop", e.target.value)
    },
    [setSelectedValue]
  )

  return (
    <Radio.Group
      value={selectedShop}
      onChange={toggleRadio}
      className="radio-group"
      defaultValue={DEFAULT_SHOP}>
      <Radio value={DEFAULT_SHOP}>{DEFAULT_SHOP}</Radio>
      {categories?.map((category, index) => (
        <Radio key={`category-${index}`} value={category.name}>
          {category.name}
        </Radio>
      ))}
    </Radio.Group>
  )
}
