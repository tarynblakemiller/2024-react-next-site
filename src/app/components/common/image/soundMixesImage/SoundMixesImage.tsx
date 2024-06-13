import Image from "next/image";
import React from "react";
import soundMixesImageStyles from "../sectionImage/SectionImage.module.css";

interface SoundMixesSectionImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
  layout?: "fixed" | "intrinsic" | "responsive" | "fill";
}

const SoundMixesSectionImage: React.FC<SoundMixesSectionImageProps> = ({
  src,
  alt,
  width,
  height,
  layout,
  style,
}) => {
  return (
    <div className={soundMixesImageStyles.container} style={style}>
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

export default SoundMixesSectionImage;
