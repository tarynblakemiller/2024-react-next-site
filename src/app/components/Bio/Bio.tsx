import React from "react";

interface BioProps {
  onClick: () => void;
  isItalic: boolean;
  showBio: boolean;
  style?: React.CSSProperties;
  resetSectionButtonStates: () => void;
}

export const Bio: React.FC<BioProps> = ({ onClick, isItalic }) => {
  const fontStyle: React.CSSProperties = isItalic
    ? { fontStyle: "italic" }
    : {};

  return (
    <div style={{ cursor: "pointer", ...fontStyle }} onClick={onClick}>
      taryn blake miller
    </div>
  );
};
