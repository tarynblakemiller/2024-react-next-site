import Image from "next/image";
import React from "react";
import ImageStyles from "./ImageComponentStyles.module.css";

interface ImageComponentProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  layout?: "fixed" | "intrinsic" | "responsive" | "fill";
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  width,
  height,
  layout,
  style,
}) => {
  return (
    <div className={ImageStyles.imageContainer} style={style}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout={layout}
        style={style}
      />
    </div>
  );
};

export default ImageComponent;
