import { Card } from "antd"
import React from "react"

import "./optionBar.style.less"

// constants
import OptionComponent from "./option.component"

export interface OptionBarProps {}

export default function OptionBarComponent() {
  return (
    <Card className="sidebar">
      <OptionComponent />
    </Card>
  )
}
