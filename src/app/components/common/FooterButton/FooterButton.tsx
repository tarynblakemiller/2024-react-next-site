import React, { ReactNode, useContext } from "react";
import styles from "../ToggleButton/toggleButton.module.css";
import footerStyles from "../../../components/layout/Footer/footerStyles.module.css";
import { Navbar, NavbarContext } from "../../layout/Navbar/Navbar";

interface FooterButtonProps {
  isActive?: boolean;
  onClick: () => void;
  activeText?: string;
  inactiveText?: string;
  isAboutActive?: boolean;
  activeIndex?: number;
  activeSection?: string;
  children?: ReactNode;
  sectionName: string;
  index: number;
}

export const FooterButton: React.FC<FooterButtonProps> = ({
  isActive,
  onClick,
  activeText,
  inactiveText,
  sectionName,
  index,
}) => {
  return (
    // <div className={footerStyles.footerContainer}>
    // <div className={footerStyles.footerInnerContainer}>
    <div>
      <button
        className={`${footerStyles.footerSectionButton} ${
          isActive ? styles.active : styles.inactive
        }`}
        onClick={() => onClick()}
      >
        {isActive ? activeText : inactiveText}
      </button>
    </div>
    // </div>
  );
};
