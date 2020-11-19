import React from "react"

import "./facilityIcon.style.less"

export interface FacilityIconProps {
  facility: "ที่จอดรถ" | "รับจองล่วงหน้า" | "สามารถนำสัตว์เลี้ยงเข้าได้"
}

export default function FacilityIconComponent({ facility }: FacilityIconProps) {
  switch (facility) {
    case "ที่จอดรถ":
      return (
        <div className="icon">
          <img
            alt="car-icon"
            src="https://search-merchant.xn--42caj4e6bk1f5b1j.com/images/facilities/%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%88%E0%B8%AD%E0%B8%94%E0%B8%A3%E0%B8%96.png"
          />
        </div>
      )
    case "รับจองล่วงหน้า":
      return (
        <div className="icon" style={{ paddingLeft: 6 }}>
          <img
            alt="booking-icon"
            src="https://search-merchant.xn--42caj4e6bk1f5b1j.com/images/facilities/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%88%E0%B8%AD%E0%B8%87%E0%B8%A5%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2.png"
          />
        </div>
      )
    case "สามารถนำสัตว์เลี้ยงเข้าได้":
      return (
        <div className="icon">
          <img
            alt="pet-icon"
            src="https://search-merchant.xn--42caj4e6bk1f5b1j.com/images/facilities/%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%B2%E0%B8%A3%E0%B8%96%E0%B8%99%E0%B8%B3%E0%B8%AA%E0%B8%B1%E0%B8%95%E0%B8%A7%E0%B9%8C%E0%B9%80%E0%B8%A5%E0%B8%B5%E0%B9%89%E0%B8%A2%E0%B8%87%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B9%84%E0%B8%94%E0%B9%89.png"
          />
        </div>
      )
  }
}
