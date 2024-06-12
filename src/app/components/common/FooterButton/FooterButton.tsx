import React, { useContext } from "react";
import { NavbarContext } from "@/app/context/NavbarContext";
import footerButtonStyles from "../ToggleButton/toggleButton.module.css";

export interface FooterButtonProps {
  isActive: boolean;
  onClick: () => void;
  activeText: string;
  inactiveText: string;
  sectionName: string;
  activeIndex: number;
}

export const FooterButton: React.FC<FooterButtonProps> = ({
  isActive,
  onClick,
  activeText,
  inactiveText,
}) => {
  const { activeSection } = useContext(NavbarContext);

  return (
    <button
      className={`${footerButtonStyles.footerSectionButton} ${
        isActive ? footerButtonStyles.active : footerButtonStyles.inactive
      }`}
      onClick={() => onClick()}
    >
      {isActive ? activeText : inactiveText}
    </button>
  );
};
