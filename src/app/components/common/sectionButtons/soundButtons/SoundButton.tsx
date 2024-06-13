/* eslint-disable react/prop-types */
// @ts-nocheck
"use client";
import soundButtonStyles from "./SoundSectionButton/SoundSectionButtonStyles.module.css";
import ImageComponent from "../../image/imageComponent/ImageComponent";

interface SoundButtonProps {
  name: string;
  link: string;
  children?: React.ReactNode;
  type?: string;
  soundCloudLink?: string;
  style?: React.CSSProperties;
}

const SoundButton: React.FC<SoundButtonProps> = ({
  name,
  link,
  type,
  soundCloudLink,
}) => {
  return (
    <div className={soundButtonStyles.soundButtonWrapper}>
      {type === "text" ? (
        <div
          className={soundButtonStyles.styledStaticButton}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </div>
      ) : (
        <a href={soundCloudLink} target="_blank" rel="noopener noreferrer">
          <ImageComponent
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
export default SoundButton;
