import { Select } from "antd"
import React, { useCallback } from "react"

import { useDataCenterContext } from "../../controllers/dataCenter.controller"
import { useSearchContext } from "../../controllers/search.controller"

const { Option } = Select

export interface PriceSelectProps {}

export default function PriceSelectComponent() {
  const { priceRange } = useDataCenterContext()
  const { setCurrentPriceLevel } = useSearchContext()

  const handleChange = useCallback(
    (value: string) => {
      setCurrentPriceLevel(value)
    },
    [setCurrentPriceLevel]
  )

  return (
    <Select showSearch placeholder="กรุณาเลือก" optionFilterProp="children" onChange={handleChange}>
      <Option value="ทั้งหมด">ทั้งหมด</Option>
      {priceRange?.map((price, index) => (
        <Option key={`price-${index}`} value={index + 1}>
          {price}
        </Option>
      ))}
    </Select>
  )
}
