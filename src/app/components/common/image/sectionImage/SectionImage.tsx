import Image from "next/image";
import React from "react";
import sectionImageStyles from "./SectionImage.module.css";

interface BannerWrapperProps {
  src?: string;
}

interface SectionImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  style?: React.CSSProperties;
  layout?: "fixed" | "intrinsic" | "responsive" | "fill";
}

const SectionImage: React.FC<SectionImageProps> = ({
  src,
  alt,
  width,
  height,
  layout,
  style,
}) => {
  return (
    <div className={sectionImageStyles.SectionContainerWrapper}>
      <div className={sectionImageStyles.soundMain}>
        <div className={sectionImageStyles.SectionContainerWrapper}>
          <div className={sectionImageStyles.container} style={style}>
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              layout={layout}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                margin: 0,
                padding: 0,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionImage;
