import React, { useCallback, useContext, useMemo, useState } from "react"
import _ from "lodash"
import { useDataCenterContext, DataCenterConstruct } from "./dataCenter.controller"
import { useHistory } from "react-router-dom"
import { DEFAULT_VALUE_LIST } from "../constants/defaultValue"
import {
  DEFAULT_PROVINCE,
  DEFAULT_SHOP,
  DEFAULT_CATEGORY,
  DEFAULT_PRICE_LEVEL
} from "../constants/defaultValue"

export interface SearchConstruct {
  searching: string
  setSearching: React.Dispatch<React.SetStateAction<string>>
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
  insertQueryString: (
    type: "search" | "shop" | "category" | "priceLevel" | "province",
    value: string
  ) => void
  setSelectedValue: (
    type: "search" | "shop" | "category" | "priceLevel" | "province",
    value: string
  ) => void
}

export const SearchContext = React.createContext({} as SearchConstruct)

export const useSearchContext = () => useContext(SearchContext)

export default function SearchProvider({ ...props }) {
  const history = useHistory()
  const urlParams = new URLSearchParams(window.location.search)
  const { categories, merchants } = useDataCenterContext()
  const [searching, setSearching] = useState<string>(
    urlParams.has("search") ? (urlParams.get("search") as string) : ""
  )
  const [selectedShop, setSelectedShop] = useState<string>(
    urlParams.has("shop") ? (urlParams.get("shop") as string) : DEFAULT_SHOP
  )
  const [selectedCategory, setSelectedCategory] = useState<string>(
    urlParams.has("category") ? (urlParams.get("category") as string) : DEFAULT_CATEGORY
  )
  const [selectedPriceLevel, setSelectedPriceLevel] = useState<number>(
    urlParams.has("priceLevel")
      ? parseInt(urlParams.get("priceLevel") as string)
      : DEFAULT_PRICE_LEVEL
  )
  const [selectedProvince, setSelectedProvince] = useState<string>(
    urlParams.has("province") ? (urlParams.get("province") as string) : DEFAULT_PROVINCE
  )

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
        ? filteredSearching &&
            filteredShop &&
            filteredProvinceName &&
            filteredCategory &&
            filteredPriceLevel
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

  const insertQueryString = useCallback(
    (type: "search" | "shop" | "category" | "priceLevel" | "province", value: string) => {
      let params = new URLSearchParams(window.location.search)
      let query = {
        search: params.has("search") ? `${params.get("search")}` : "",
        shop:
          params.has("shop") && params.get("shop") !== DEFAULT_SHOP ? `${params.get("shop")}` : "",
        category:
          params.has("category") && params.get("category") !== DEFAULT_CATEGORY
            ? `${params.get("category")}`
            : "",
        priceLevel:
          params.has("priceLevel") && params.get("priceLevel") !== `${DEFAULT_PRICE_LEVEL}`
            ? `${params.get("priceLevel")}`
            : "",
        province:
          params.has("province") && params.get("province") !== DEFAULT_PROVINCE
            ? `${params.get("province")}`
            : ""
      }
      query[type] = value === `${DEFAULT_VALUE_LIST[type]}` ? "" : value
      let andSymbol = false
      let resolveQuery = Object.entries(query)
        .map(([key, value]) => {
          if (value === "") return ""
          let str = `${andSymbol ? "&" : ""}${key}=${value}`
          andSymbol = true
          return str
        })
        .join("")
      history.push(`/?${resolveQuery}`)
    },
    [history]
  )

  const setSelectedValue = useCallback(
    (type: "search" | "shop" | "category" | "priceLevel" | "province", value: string) => {
      if (type === "search") setSearching(value)
      else if (type === "shop") {
        setSelectedShop(value)
        if (value === DEFAULT_SHOP) setSelectedCategory(DEFAULT_CATEGORY)
      } else if (type === "category") setSelectedCategory(value)
      else if (type === "priceLevel") setSelectedPriceLevel(parseInt(value))
      else if (type === "province") setSelectedProvince(value)
      insertQueryString(type, value)
    },
    [insertQueryString]
  )

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
    currentMerchants,
    insertQueryString,
    setSelectedValue
  }

  return <SearchContext.Provider value={value} {...props} />
}
