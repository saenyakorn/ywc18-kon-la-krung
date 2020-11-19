import { Card, Divider, Space, Typography } from "antd"
import React from "react"

import { useDataCenterContext } from "../../controllers/dataCenter.controller"
import BadgeComponent from "../badge.component"

import "./cardList.style.less"
import FacilityIconComponent from "../icons/facilityIcon.component"
import { FacilityIconProps } from "../icons/facilityIcon.component"

const { Title, Text } = Typography

export interface CardListProps {}

export default function CardListComponent() {
  const { merchants } = useDataCenterContext()

  return (
    <Space direction="vertical" className="space-container">
      {merchants?.map((merchant, index) => (
        <div className="horizontal">
          <Card className="card" key={`merchant-${index}`}>
            <img width={240} height={240} alt={merchant.shopNameTH} src={merchant.coverImageId} />
            <div>
              <div className="title-container">
                <Space direction="horizontal" align="start" className="full-width">
                  <Title level={4} className="title">
                    {merchant.shopNameTH}
                  </Title>
                  {merchant.isOpen !== "N/A" && <BadgeComponent type={merchant.isOpen} />}
                </Space>
                <Text className="grey-text">
                  <span>{`${merchant.categoryName} | `}</span>
                  <span>
                    {["฿", "฿", "฿", "฿"].map((symbol, index) => (
                      <span className={index < merchant.priceLevel ? "black" : "grey-text"}>
                        {symbol}
                      </span>
                    ))}
                  </span>
                  <span>{` | ${merchant.addressDistrictName} ${merchant.addressProvinceName}`}</span>
                </Text>
                <Divider type="horizontal" />
                <div className="highlightText">
                  <Text className="grey-text">
                    <div dangerouslySetInnerHTML={{ __html: `${merchant.highlightText}` }}></div>
                  </Text>
                </div>
                <div>
                  <Text className="grey-text">
                    <span className="bold">แนะนำ:</span>
                    <span>
                      {`${merchant.recommendedItems.reduce((prev, next) => prev + next, "")}`}{" "}
                    </span>
                  </Text>
                </div>

                <div className="facilities">
                  {merchant.facilities.map((facility, index) => (
                    <FacilityIconComponent
                      facility={facility as FacilityIconProps["facility"]}
                      key={`facility-${index}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </Space>
  )
}