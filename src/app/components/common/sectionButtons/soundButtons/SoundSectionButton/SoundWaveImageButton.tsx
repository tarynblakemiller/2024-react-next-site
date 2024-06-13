/* eslint-disable react/prop-types */
// @ts-nocheck
"use client";
import Image from "next/image";
import soundButtonStyles from "./SoundSectionButtonStyles.module.css";

interface SoundWaveImageButtonProps {
  name: string;
  link: string;
  children?: React.ReactNode;
  type?: string;
  soundCloudLink?: string;
  style?: React.CSSProperties;
}

const SoundWaveImageButton: React.FC<SoundWaveImageButtonProps> = ({
  name,
  link,
  type,
  soundCloudLink,
  style,
}) => {
  return (
    <div className={soundButtonStyles.soundMixesButtonWrapper}>
      {type === "text" ? (
        <a
          className={soundButtonStyles.styledStaticButton}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
      ) : (
        <a href={soundCloudLink} target="_blank" rel="noopener noreferrer">
          <Image
            src={link}
            alt={name}
            width={60}
            height={30}
            style={{ padding: "5px" }}
          />
        </a>
      )}
    </div>
  );
};
export default SoundWaveImageButton;
