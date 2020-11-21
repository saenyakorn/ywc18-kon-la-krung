import { Tooltip } from "antd"
import React from "react"

import "./facilityIcon.style.less"

export interface FacilityIconProps {
  facility:
    | "ที่จอดรถ"
    | "รับจองล่วงหน้า"
    | "สามารถนำสัตว์เลี้ยงเข้าได้"
    | "บริการจัดส่งอาหาร"
    | "จำหน่ายเครื่องดื่มแอลกอฮอล์"
    | "รับบัตรเครดิต"
}

export default function FacilityIconComponent({ facility }: FacilityIconProps) {
  switch (facility) {
    case "ที่จอดรถ":
      return (
        <Tooltip placement="top" title={facility} className="icon">
          <img
            alt="car-icon"
            src="https://search-merchant.xn--42caj4e6bk1f5b1j.com/images/facilities/%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%A3%E0%B8%96.png"
          />
        </Tooltip>
      )
    case "รับจองล่วงหน้า":
      return (
        <Tooltip placement="top" title={facility} className="icon" style={{ paddingLeft: 6 }}>
          <img
            alt="booking-icon"
            src="https://search-merchant.xn--42caj4e6bk1f5b1j.com/images/facilities/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%88%E0%B8%AD%E0%B8%87%E0%B8%A5%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2.png"
          />
        </Tooltip>
      )
    case "สามารถนำสัตว์เลี้ยงเข้าได้":
      return (
        <Tooltip placement="top" title={facility} className="icon">
          <img
            alt="pet-icon"
            src="https://search-merchant.xn--42caj4e6bk1f5b1j.com/images/facilities/%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B8%96%E0%B8%99%E0%B8%B3%E0%B8%AA%E0%B8%B1%E0%B8%95%E0%B8%A7%E0%B9%8C%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B9%89%E0%B8%A2%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B9%84%E0%B8%94%E0%B9%89.png"
          />
        </Tooltip>
      )
    case "บริการจัดส่งอาหาร":
      return (
        <Tooltip placement="top" title={facility} className="icon">
          <img
            alt="pet-icon"
            src="https://search-merchant.xn--42caj4e6bk1f5b1j.com/images/facilities/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B9%88%E0%B8%87%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3.png"
          />
        </Tooltip>
      )
    case "จำหน่ายเครื่องดื่มแอลกอฮอล์":
      return (
        <Tooltip placement="top" title={facility} className="icon">
          <img
            alt="pet-icon"
            src="https://search-merchant.xn--42caj4e6bk1f5b1j.com/images/facilities/%E0%B8%88%E0%B8%B3%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%94%E0%B8%B7%E0%B9%88%E0%B8%A1%E0%B9%81%E0%B8%AD%E0%B8%A5%E0%B8%81%E0%B8%AD%E0%B8%AE%E0%B8%AD%E0%B8%A5%E0%B9%8C.png"
          />
        </Tooltip>
      )
    case "รับบัตรเครดิต":
      return (
        <Tooltip placement="top" title={facility} className="icon">
          <img
            alt="pet-icon"
            src="https://search-merchant.xn--42caj4e6bk1f5b1j.com/images/facilities/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%94%E0%B8%B4%E0%B8%95.png"
          />
        </Tooltip>
      )
  }
}
