import React, { useContext, useMemo, useState } from "react"
import _ from "lodash"
import { useDataCenterContext, DataCenterConstruct } from "./dataCenter.controller"
import {
  DEFAULT_PROVINCE,
  DEFAULT_SHOP,
  DEFAULT_CATEGORY,
  DEFAULT_PRICE_LEVEL
} from "../constants/defaultValue"

export interface SearchConstruct {
  searching: string | undefined
  setSearching: React.Dispatch<React.SetStateAction<string | undefined>>
  selectedShop: string
  setSelectedShop: React.Dispatch<React.SetStateAction<string>>
  selectedCategory: string
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
  selectedPriceLevel: number
  setSelectedPriceLevel: React.Dispatch<React.SetStateAction<number>>
  selectedProvince: string
  setSelectedProvince: React.Dispatch<React.SetStateAction<string>>
  currentCategory: string[] | undefined
  currentMerchants: DataCenterConstruct["merchants"] | undefined
}

export const SearchContext = React.createContext({} as SearchConstruct)

export const useSearchContext = () => useContext(SearchContext)

export default function SearchProvider({ ...props }) {
  const { categories, merchants } = useDataCenterContext()
  const [searching, setSearching] = useState<string>()
  const [selectedShop, setSelectedShop] = useState<string>(DEFAULT_SHOP)
  const [selectedCategory, setSelectedCategory] = useState<string>(DEFAULT_CATEGORY)
  const [selectedPriceLevel, setSelectedPriceLevel] = useState<number>(DEFAULT_PRICE_LEVEL)
  const [selectedProvince, setSelectedProvince] = useState<string>(DEFAULT_PROVINCE)

  const currentCategory = useMemo(
    () => _.find(categories, item => item.name === selectedShop)?.subcategories,
    [categories, selectedShop]
  )

  const currentMerchants = useMemo(() => {
    let filteredMerchants = merchants?.filter((merchant, index) => {
      let filteredSearching: Boolean =
        !!searching &&
        (merchant.shopNameTH.includes(searching) ||
          merchant.categoryName.includes(searching) ||
          merchant.subcategoryName.includes(searching) ||
          merchant.highlightText.includes(searching) ||
          merchant.facilities.includes(searching) ||
          merchant.recommendedItems.includes(searching))
      let filteredShop: Boolean =
        selectedShop === DEFAULT_SHOP || currentCategory?.indexOf(merchant.subcategoryName) !== -1
      let filteredProvinceName: Boolean =
        selectedProvince === DEFAULT_PROVINCE ||
        merchant.addressProvinceName.indexOf(selectedProvince) !== -1
      let filteredCategory: Boolean =
        selectedCategory === DEFAULT_CATEGORY || merchant.subcategoryName === selectedCategory
      let filteredPriceLevel: Boolean = merchant.priceLevel <= selectedPriceLevel
      return !!searching
        ? filteredSearching
        : filteredShop && filteredProvinceName && filteredCategory && filteredPriceLevel
    })
    return filteredMerchants
  }, [
    searching,
    merchants,
    selectedCategory,
    selectedPriceLevel,
    selectedProvince,
    selectedShop,
    currentCategory
  ])

  const value = {
    searching,
    setSearching,
    selectedShop,
    setSelectedShop,
    selectedCategory,
    setSelectedCategory,
    selectedPriceLevel,
    setSelectedPriceLevel,
    selectedProvince,
    setSelectedProvince,
    currentCategory,
    currentMerchants
  }

  return <SearchContext.Provider value={value} {...props} />
}
