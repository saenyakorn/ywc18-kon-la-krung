import { Skeleton } from "antd"
import React, { useCallback, useState } from "react"

export interface SkeletonImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: any
}

export default function SkeletonImageComponent({
  className,
  alt,
  src,
  ...props
}: SkeletonImageProps) {
  const [loading, setLoading] = useState<Boolean>(true)

  const handleLoaded = useCallback(() => {
    setLoading(false)
  }, [])

  return (
    <>
      {" "}
      {loading && <Skeleton.Avatar className={className} active shape="square" />}
      <img
        alt={alt}
        src={src}
        className={className}
        {...props}
        onLoad={handleLoaded}
        style={{ display: loading ? "none" : "block" }}
      />
    </>
  )
}
