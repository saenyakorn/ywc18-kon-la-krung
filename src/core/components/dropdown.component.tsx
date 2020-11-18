import { Button, Select } from "antd"
import React from "react"

import { MdLocationOn } from "react-icons/md"
import ProvinceMenuComponent from "./provinceMenu.component"

export interface DropdownProps {}

export default function DropdownComponent() {
  return (
    <Select>
      <Button>
        <MdLocationOn /> <span>สถานที่ทั้งหมด</span>
      </Button>
    </Select>
  )
}
