import React, { useCallback, useState } from "react"
import { Radio } from "antd"
import { RadioChangeEvent } from "antd/lib/radio"

export type RadioValues = "all" | "restaurant" | "otop" | "tongfah" | "general"

export interface RadioGroupProps {}

export default function RadioGroupComponent() {
  const [value, setValue] = useState<RadioValues>()

  const toggleRadio = useCallback((e: RadioChangeEvent) => {
    setValue(e.target.value as RadioValues)
  }, [])

  return (
    <Radio.Group value={value} onChange={toggleRadio}>
      <Radio value="all">ทั้งหมด</Radio>
      <Radio value="restaurant">ร้านอาหารและเครื่องดื่ม</Radio>
      <Radio value="otop">ร้านค้า OTOP</Radio>
      <Radio value="tongfah">ร้านธงฟ้า</Radio>
      <Radio value="general">สินค้าทั่วไป</Radio>
    </Radio.Group>
  )
}
