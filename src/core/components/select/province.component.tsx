import { Select } from "antd"
import React, { useCallback } from "react"

import { MdLocationOn } from "react-icons/md"
import { useDataCenterContext } from "../../controllers/dataCenter.controller"
import { useSearchContext } from "../../controllers/search.controller"
import { DEFAULT_PROVINCE } from "../../constants/defaultValue"

const { Option } = Select

export interface ProvinceSelectProps {
  size?: "large" | "middle" | "small"
  className?: string
}

export default function ProvinceSelectComponent(props: ProvinceSelectProps) {
  const { provinces } = useDataCenterContext()
  const { selectedProvince, setSelectedValue } = useSearchContext()

  const handleChange = useCallback(
    (value: string) => {
      setSelectedValue("province", value)
    },
    [setSelectedValue]
  )

  return (
    <Select
      showSearch
      value={selectedProvince}
      defaultValue={DEFAULT_PROVINCE}
      placeholder="กรุณาเลือกสถานที่"
      optionFilterProp="children"
      onChange={handleChange}
      {...props}>
      <Option value={DEFAULT_PROVINCE}>
        <MdLocationOn />
        {DEFAULT_PROVINCE}
      </Option>
      {provinces?.map((province, index) => (
        <Option key={`province-${index}`} value={province}>
          {province}
        </Option>
      ))}
    </Select>
  )
}
