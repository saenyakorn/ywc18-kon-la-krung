import { Select } from "antd"
import React, { useCallback } from "react"

import { useDataCenterContext } from "../../controllers/dataCenter.controller"
import { useSearchContext } from "../../controllers/search.controller"
import { DEFAULT_PRICE_LEVEL } from "../../constants/defaultValue"

const { Option } = Select

export interface PriceSelectProps {}

export default function PriceSelectComponent() {
  const { priceRange } = useDataCenterContext()
  const { selectedPriceLevel, setSelectedValue } = useSearchContext()

  const handleChange = useCallback(
    (value: number) => {
      setSelectedValue("priceLevel", `${value}`)
    },
    [setSelectedValue]
  )

  return (
    <Select
      showSearch
      placeholder="กรุณาเลือก"
      optionFilterProp="children"
      value={selectedPriceLevel}
      defaultValue={DEFAULT_PRICE_LEVEL}
      onChange={handleChange}>
      <Option value={DEFAULT_PRICE_LEVEL}>ทั้งหมด</Option>
      {priceRange?.map((price, index) => (
        <Option key={`price-${index}`} value={index + 1}>
          {price}
        </Option>
      ))}
    </Select>
  )
}
