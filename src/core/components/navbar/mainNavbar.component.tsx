import { AutoComplete, Input } from "antd"
import React, { useCallback, useState } from "react"

import "./navbar.style.less"
import { useDataCenterContext } from "../../controllers/dataCenter.controller"
import ProvinceSelectComponent from "../select/province.component"

// icons
import { MdCardTravel, MdRestaurant, MdMenu } from "react-icons/md"
import { useSearchContext } from "../../controllers/search.controller"
import DrawerComponent from "../drawer/drawer.component"

export interface MainNavbarProps {}

export default function MainNavbarComponent() {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState<string>("")
  const { categories } = useDataCenterContext()
  const { setSelectedValue } = useSearchContext()

  const handleClose = useCallback(() => {
    setVisible(false)
  }, [])

  const handleShow = useCallback(() => {
    setVisible(true)
  }, [])

  const handleSubmit = useCallback(
    e => {
      e.preventDefault()
      setSelectedValue("search", value)
    },
    [setSelectedValue, value]
  )

  const handleSelect = useCallback(
    (value: string) => {
      setSelectedValue("search", "")
      setSelectedValue("shop", value)
    },
    [setSelectedValue]
  )
  const handleSearch = useCallback((input: string) => {
    setValue(input)
  }, [])

  return (
    <div className="navbar-container">
      <div className="navbar-item">
        <img
          alt="logo"
          height={40}
          className="hide-lg"
          src="https://search-merchant.xn--42caj4e6bk1f5b1j.com/images/halfhalf-logo.png"
        />
        <img
          alt="logo"
          height={40}
          className="show-lg"
          src="https://search-merchant.xn--42caj4e6bk1f5b1j.com/images/halfhalf-logo-mini.png"
        />
        <div className="province-select-container">
          <ProvinceSelectComponent />
        </div>
        <form noValidate onSubmit={handleSubmit} className="form">
          <AutoComplete
            defaultValue=""
            value={value}
            className="autocomplete"
            dropdownClassName="autocomplete-dropdown"
            dropdownMatchSelectWidth={250}
            onSelect={handleSelect}
            onSearch={handleSearch}
            filterOption={(inputValue, option) => option?.value.includes(inputValue)}
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
        </form>
        <div className="menu-sidebar show-lg">
          <MdMenu size={24} onClick={handleShow} />
        </div>
      </div>
      <DrawerComponent
        title="กรอกผล"
        placement="right"
        closable={true}
        onClose={handleClose}
        visible={visible}
      />
    </div>
  )
}
