import React from "react";
import { ToggleButton } from "../../ToggleButton/ToggleButton";

export const FooterButton: React.FC<{
  isActive: boolean;
  onClick: () => void;
  activeText: string;
  inactiveText: string;
  sectionName: string;
  activeIndex: number;
}> = ({ isActive, onClick, activeText, inactiveText }) => {
  return (
    <ToggleButton
      isActive={isActive}
      onToggle={onClick}
      activeText={activeText}
      inactiveText={inactiveText}
    />
  );
};
