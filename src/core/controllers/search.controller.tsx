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
      if (selectedShop === DEFAULT_SHOP) return true
      let filteredProvinceName: Boolean =
        selectedProvince === DEFAULT_PROVINCE ||
        merchant.addressProvinceName.indexOf(selectedProvince) !== -1
      let filteredCategory: Boolean =
        selectedCategory === DEFAULT_CATEGORY || merchant.subcategoryName === selectedCategory
      let filteredPriceLevel: Boolean = merchant.priceLevel <= selectedPriceLevel
      console.log(index, filteredProvinceName, filteredCategory, filteredPriceLevel)
      return filteredProvinceName && filteredCategory && filteredPriceLevel
    })
    return filteredMerchants
  }, [merchants, selectedCategory, selectedPriceLevel, selectedProvince, selectedShop])

  const value = {
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
