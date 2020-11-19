import React, { useContext, useMemo, useState } from "react"
import _ from "lodash"
import { useDataCenterContext } from "./dataCenter.controller"

export interface SearchConstruct {
  currentPriceLevel: string
  setCurrentPriceLevel: React.Dispatch<React.SetStateAction<string>>
  currentShop: string
  setCurrentShop: React.Dispatch<React.SetStateAction<string>>
  currentProvince: string
  setCurrentProvince: React.Dispatch<React.SetStateAction<string>>
  currentCategory: string[] | undefined
}

export const SearchContext = React.createContext({} as SearchConstruct)

export const useSearchContext = () => useContext(SearchContext)

export default function SearchProvider({ ...props }) {
  const { categories } = useDataCenterContext()
  const [currentPriceLevel, setCurrentPriceLevel] = useState<string>("")
  const [currentShop, setCurrentShop] = useState<string>("ทั้งหมด")
  const [currentProvince, setCurrentProvince] = useState<string>("สถานที่ทั้งหมด")

  const currentCategory = useMemo(
    () => _.find(categories, item => item.name === currentShop)?.subcategories,
    [categories, currentShop]
  )

  const value = {
    currentPriceLevel,
    setCurrentPriceLevel,
    currentShop,
    setCurrentShop,
    currentProvince,
    setCurrentProvince,
    currentCategory
  }

  return <SearchContext.Provider value={value} {...props} />
}
