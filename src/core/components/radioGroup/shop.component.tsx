import React, { useCallback, useState } from "react"
import { Radio } from "antd"
import { RadioChangeEvent } from "antd/lib/radio"
import { useDataCenterContext } from "../../controllers/dataCenter.controller"
import { useSearchContext } from "../../controllers/search.controller"

import "./radioGroup.style.less"

export interface ShopRadioGroupProps {}

export default function ShopRadioGroupComponent() {
  const [value, setValue] = useState<string>()
  const { categories } = useDataCenterContext()
  const { setCurrentShop } = useSearchContext()

  const toggleRadio = useCallback(
    (e: RadioChangeEvent) => {
      setValue(e.target.value)
      setCurrentShop(e.target.value)
    },
    [setCurrentShop]
  )

  return (
    <Radio.Group
      value={value}
      onChange={toggleRadio}
      className="radio-group"
      defaultValue="ทั้งหมด">
      <Radio value="ทั้งหมด">ทั้งหมด</Radio>
      {categories?.map((category, index) => (
        <Radio key={`category-${index}`} value={category.name}>
          {category.name}
        </Radio>
      ))}
    </Radio.Group>
  )
}
