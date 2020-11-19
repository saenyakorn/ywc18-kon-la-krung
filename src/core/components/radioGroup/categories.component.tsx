import React, { useCallback } from "react"
import { Radio } from "antd"
import { RadioChangeEvent } from "antd/lib/radio"
import { useSearchContext } from "../../controllers/search.controller"

import "./radioGroup.style.less"
import { DEFAULT_CATEGORY } from "../../constants/defaultValue"

export interface CategoriesRadioGroupProps {}

export default function CategoriesRadioGroupComponent() {
  const { currentCategory, selectedCategory, setSelectedCategory } = useSearchContext()

  const toggleRadio = useCallback(
    (e: RadioChangeEvent) => {
      setSelectedCategory(e.target.value)
    },
    [setSelectedCategory]
  )

  return (
    <Radio.Group
      value={selectedCategory}
      onChange={toggleRadio}
      className="radio-group"
      defaultValue={DEFAULT_CATEGORY}>
      <Radio value={DEFAULT_CATEGORY}>{DEFAULT_CATEGORY}</Radio>
      {currentCategory?.map((category, index) => (
        <Radio key={`category-${index}`} value={category}>
          {category}
        </Radio>
      ))}
    </Radio.Group>
  )
}
