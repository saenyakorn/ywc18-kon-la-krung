import React, { useCallback, useContext, useEffect, useMemo, useState } from "react"
import { getAllData } from "../services/main.service"

export interface DataCenterConstruct {
  categories:
    | undefined
    | {
        name: string
        subcategories: string[]
      }
  provinces: undefined | string[]
  priceRange: undefined | string[]
  merchants:
    | undefined
    | {
        shopNameTH: string
        categoryName: string
        subcategoryName: string
        coverImageId: string
        facilities: string[]
        priceLevel: string
        isOpen: string
        highlightText: string
        recommendedItems: string[]
        addressProvinceName: string
        addressDistrictName: string
      }[]
}

export const DataCenterContext = React.createContext({} as DataCenterConstruct)

export const useDataCenterContext = () => useContext(DataCenterContext)

export default function DataCenterProvider({ ...props }) {
  const [data, setData] = useState<DataCenterConstruct>()

  const requestData = useCallback(async () => {
    let result = await getAllData()
    setData(result)
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

  const value = { categories, provinces, priceRange, merchants }
  return <DataCenterContext.Provider value={value} {...props} />
}
