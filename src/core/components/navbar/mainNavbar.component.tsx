import { AutoComplete, Input } from "antd"
import React, { useCallback } from "react"

import "./navbar.style.less"
import { useDataCenterContext } from "../../controllers/dataCenter.controller"
import ProvinceSelectComponent from "../select/province.component"

// icons
import { MdCardTravel, MdRestaurant } from "react-icons/md"

export interface MainNavbarProps {}

export default function MainNavbarComponent() {
  const { categories } = useDataCenterContext()

  const handleSearch = useCallback(() => {}, [])

  return (
    <div className="navbar-container">
      <div className="navbar-item">
        <img
          alt="logo"
          height={40}
          src="https://search-merchant.xn--42caj4e6bk1f5b1j.com/images/halfhalf-logo.png"
        />
        <div className="province-select-container">
          <ProvinceSelectComponent />
        </div>
        <AutoComplete
          className="autocomplete"
          dropdownClassName="autocomplete-dropdown"
          dropdownMatchSelectWidth={250}
          onSearch={handleSearch}
          options={categories?.map(catagory => {
            return {
              value: catagory.name,
              label: (
                <div className="autocomplete-dropdown-label">
                  {catagory.name === "ร้านธงฟ้า" ? <MdCardTravel /> : <MdRestaurant />}
                  <span>{catagory.name}</span>
                </div>
              )
            }
          })}>
          <Input.Search placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป" />
        </AutoComplete>
      </div>
    </div>
  )
}
