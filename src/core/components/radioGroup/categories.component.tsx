import React, { useCallback, useState } from "react"
import { Radio } from "antd"
import { RadioChangeEvent } from "antd/lib/radio"
import { useSearchContext } from "../../controllers/search.controller"

import "./radioGroup.style.less"

export interface CategoriesRadioGroupProps {}

export default function CategoriesRadioGroupComponent() {
  const [value, setValue] = useState<string>()
  const { currentCategory } = useSearchContext()

  const toggleRadio = useCallback((e: RadioChangeEvent) => {
    setValue(e.target.value)
  }, [])

  return (
    <Radio.Group
      value={value}
      onChange={toggleRadio}
      className="radio-group"
      defaultValue="ทั้งหมด">
      <Radio value="ทั้งหมด">ทั้งหมด</Radio>
      {currentCategory?.map((category, index) => (
        <Radio key={`category-${index}`} value={category}>
          {category}
        </Radio>
      ))}
    </Radio.Group>
  )
}
