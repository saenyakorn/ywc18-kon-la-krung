import React, { useCallback, useContext, useEffect, useMemo, useState } from "react"
import { getAllData } from "../services/main.service"

export interface DataCenterConstruct {
  categories:
    | undefined
    | Array<{
        name: "ร้านอาหารและเครื่องดื่ม" | "ร้านค้า OTOP" | "ร้านธงฟ้า" | "สินค้าทั่วไป"
        subcategories: string[]
      }>
  provinces: undefined | string[]
  priceRange: undefined | string[]
  merchants:
    | undefined
    | Array<{
        shopNameTH: string
        categoryName: string
        subcategoryName: string
        coverImageId: string
        facilities: string[]
        priceLevel: number
        isOpen: "Y" | "N" | "N/A"
        highlightText: string
        recommendedItems: string[]
        addressProvinceName: string
        addressDistrictName: string
      }>
  isReady: Boolean
}

export const DataCenterContext = React.createContext({} as DataCenterConstruct)

export const useDataCenterContext = () => useContext(DataCenterContext)

export default function DataCenterProvider({ ...props }) {
  const [isReady, setReady] = useState<Boolean>(false)
  const [data, setData] = useState<DataCenterConstruct>()

  const requestData = useCallback(async () => {
    setReady(false)
    let result: DataCenterConstruct = await getAllData()
    setData(result)
    setReady(true)
  }, [])

  useEffect(() => {
    try {
      requestData()
    } catch (err) {
      console.error(err)
      // TODO display error page
    }
  }, [requestData])

  const categories = useMemo(() => data?.categories, [data])
  const provinces = useMemo(() => data?.provinces, [data])
  const priceRange = useMemo(() => data?.priceRange, [data])
  const merchants = useMemo(() => data?.merchants, [data])

  const value = { categories, provinces, priceRange, merchants, isReady }
  return <DataCenterContext.Provider value={value} {...props} />
}
