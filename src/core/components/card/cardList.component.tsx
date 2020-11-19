import React from "react"
import { Card, Divider, Space, Typography } from "antd"
import { LoadingOutlined } from "@ant-design/icons"

import "./cardList.style.less"
import FacilityIconComponent from "../icons/facilityIcon.component"
import { FacilityIconProps } from "../icons/facilityIcon.component"
import { useSearchContext } from "../../controllers/search.controller"
import SkeletonImageComponent from "../skeletonImage.component"
import BadgeComponent from "../badge.component"
import { useDataCenterContext } from "../../controllers/dataCenter.controller"

const { Title, Text } = Typography

export interface CardListProps {}

export default function CardListComponent() {
  const { isReady } = useDataCenterContext()
  const { currentMerchants } = useSearchContext()

  if (!isReady)
    return (
      <div className="loading-icon">
        <LoadingOutlined />
      </div>
    )

  return (
    <Space direction="vertical" className="space-container">
      {currentMerchants?.length === 0 ? (
        <div className="no-result">
          <Title level={2}>ไม่พบสถานที่ที่คุณกำลังหา</Title>
          <Text>ร้านค้าที่ท่านค้นหาอาจไม่ได้เข้าร่วมโครงการ คนละครึ่ง</Text>
        </div>
      ) : (
        currentMerchants?.map((merchant, index) => (
          <div className="horizontal" key={`card-${index}`}>
            <Card className="card" key={`merchant-${index}`}>
              <div className="card-image-container">
                <SkeletonImageComponent
                  width={240}
                  height={240}
                  alt={merchant.shopNameTH}
                  src={merchant.coverImageId}
                />
              </div>

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
                        <span
                          className={index < merchant.priceLevel ? "black" : "grey-text"}
                          key={`baht-${index}`}>
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
        ))
      )}
    </Space>
  )
}
