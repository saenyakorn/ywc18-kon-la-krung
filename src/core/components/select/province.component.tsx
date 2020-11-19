import { Select } from "antd"
import React, { useCallback } from "react"

import { MdLocationOn } from "react-icons/md"
import { useDataCenterContext } from "../../controllers/dataCenter.controller"
import { useSearchContext } from "../../controllers/search.controller"

const { Option } = Select

export interface ProvinceSelectProps {}

export default function ProvinceSelectComponent() {
  const { provinces } = useDataCenterContext()
  const { setCurrentProvince } = useSearchContext()

  const handleChange = useCallback(
    (value: string) => {
      setCurrentProvince(value)
    },
    [setCurrentProvince]
  )

  return (
    <Select
      showSearch
      defaultValue="สถานที่ทั้งหมด"
      placeholder="กรุณาเลือกสถานที่"
      optionFilterProp="children"
      onChange={handleChange}>
      <Option value="สถานที่ทั้งหมด">
        <MdLocationOn />
        {" สถานที่ทั้งหมด"}
      </Option>
      {provinces?.map((province, index) => (
        <Option key={`province-${index}`} value={province}>
          {province}
        </Option>
      ))}
    </Select>
  )
}
