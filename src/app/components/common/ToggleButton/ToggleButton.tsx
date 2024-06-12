import React, { useState } from "react";
import styles from "./toggleButton.module.css";
import { useTheme } from "@/app/context/Providers/ThemeProvider";

interface ToggleButtonProps {
  isActive?: boolean;
  onToggle: () => void;
  activeText?: string;
  inactiveText?: string;
  isAboutActive?: boolean;
  activeIndex?: number;
  activeSection?: string | null;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  isActive,
  onToggle,
  activeText,
  inactiveText,
}) => {
  // const { themeValue, setThemeValue } = useTheme();
  return (
    <button
      className={`${styles.toggleButton} ${
        isActive ? styles.active : styles.inactive
      }`}
      onClick={onToggle}
    >
      {isActive ? activeText : inactiveText}
    </button>
  );
};
