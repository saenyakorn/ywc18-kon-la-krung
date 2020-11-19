import { Card } from "antd"
import React from "react"
import { LoadingOutlined } from "@ant-design/icons"

import "./optionBar.style.less"

// constants
import OptionComponent from "./option.component"
import { useDataCenterContext } from "../controllers/dataCenter.controller"

export interface OptionBarProps {}

export default function OptionBarComponent() {
  const { isReady } = useDataCenterContext()
  return (
    <Card className="sidebar">
      {isReady ? (
        <OptionComponent />
      ) : (
        <div className="loading-icon">
          <LoadingOutlined />
        </div>
      )}
    </Card>
  )
}
