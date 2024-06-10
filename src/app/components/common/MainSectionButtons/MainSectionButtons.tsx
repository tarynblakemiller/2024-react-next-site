import React, { useState, useContext, createContext } from "react";
import { ToggleButton } from "../../common/ToggleButton/ToggleButton";

interface MainSectionButtonProps {
  activeIndex: number;
}

const sections = [
  { name: "software", index: 1 },
  { name: "sound", index: 4 },
  { name: "lighting", index: 5 },
];

export const MainSectionButton: React.FC<MainSectionButtonProps> = ({
  activeIndex,
}) => {
  const [activeStates, setActiveStates] = useState<{ [key: string]: boolean }>({
    software: false,
    sound: false,
    lighting: false,
  });

  const handleToggle = (sectionName: string) => {
    setActiveStates((prevStates) => ({
      ...prevStates,
      [sectionName]: !prevStates[sectionName],
    }));
  };

  return (
    <div>
      {sections
        .filter((section) => section.index === activeIndex)
        .map((section) => (
          <ToggleButton
            key={section.name}
            isActive={activeStates[section.name]}
            onToggle={() => handleToggle(section.name)}
            activeText={`${section.name} Active`}
            inactiveText={`${section.name} Inactive`}
          />
        ))}
    </div>
  );
};
