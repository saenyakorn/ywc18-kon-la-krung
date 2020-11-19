import React from "react"
import { Drawer } from "antd"
import { DrawerProps } from "antd/lib/drawer"

import "./drawer.style.less"
import OptionComponent from "../option.component"

export default function DrawerComponent({ ...props }: DrawerProps) {
  return (
    <Drawer {...props} className="drawer sidebar">
      <div className="drawer-body">
        <OptionComponent />
      </div>
    </Drawer>
  )
}
