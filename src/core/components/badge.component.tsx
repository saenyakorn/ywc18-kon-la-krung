import { Tag } from "antd"
import React from "react"

export interface BadgeProps {
  type: "Y" | "N"
}

export default function BadgeComponent({ type }: BadgeProps) {
  return (
    <Tag color={type === "Y" ? "#87d068" : "#a1a1a1"}>{type === "Y" ? "เปิดอยู่" : "ปิดแล้ว"}</Tag>
  )
}
