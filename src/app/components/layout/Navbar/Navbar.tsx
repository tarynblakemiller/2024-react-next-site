import React, { useState, createContext, useContext } from "react";
import { ToggleButton } from "../../common/ToggleButton/ToggleButton";
import styles from "./navBar.module.css";
import cvStyles from "../../../styles/style.module.css";
import { Bio } from "../../Bio/Bio";

interface NavbarProps {
  activeIndexes: number[];
  onButtonClick: (section: string, index: number) => void;
}

export const NavbarContext = createContext<{
  activeStates: { [key: string]: boolean };
  setActiveStates: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  isItalic: boolean;
  setIsItalic: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  activeStates: {},
  setActiveStates: () => {},
  activeIndex: -1,
  setActiveIndex: () => {},
  isItalic: false,
  setIsItalic: () => {},
});

const sections = [
  { name: "software", index: 1 },
  { name: "sound", index: 4 },
  { name: "lighting", index: 5 },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeIndexes,
  onButtonClick,
}) => {
  const [activeStates, setActiveStates] = useState<{ [key: string]: boolean }>({
    software: false,
    sound: false,
    lighting: false,
  });

  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [isItalic, setIsItalic] = useState(false);

  const handleToggle = (sectionName: string, index: number) => {
    const newActiveStates = sections.reduce((acc, section) => {
      acc[section.name] = section.name === sectionName;
      return acc;
    }, {} as { [key: string]: boolean });

    setActiveStates(newActiveStates);
    setActiveIndex(index);
    onButtonClick(sectionName, index);
    setIsItalic(false);
  };

  const toggleItalic = () => {
    setIsItalic((prev) => !prev);
    resetSectionButtonStates();
  };

  const resetSectionButtonStates = () => {
    setActiveStates({
      software: false,
      sound: false,
      lighting: false,
    });
    setActiveIndex(-1);
  };

  return (
    <>
      <NavbarContext.Provider
        value={{
          activeIndex,
          setActiveIndex,
          activeStates,
          setActiveStates,
          isItalic,
          setIsItalic,
        }}
      >
        <Bio
          onClick={toggleItalic}
          isItalic={isItalic}
          resetSectionButtonStates={resetSectionButtonStates}
        />
        {isItalic && (
          <a className={cvStyles.CV} href="/CV.pdf" download="CV.pdf">
            {" "}
            CV{" "}
          </a>
        )}
        <div className={styles.navBar}>
          {sections
            .filter((section) => activeIndexes.includes(section.index))
            .map((section) => (
              <ToggleButton
                key={section.name}
                isActive={activeStates[section.name]}
                onToggle={() => handleToggle(section.name, section.index)}
                activeText={`${section.name}`}
                inactiveText={`${section.name}`}
              />
            ))}
        </div>
      </NavbarContext.Provider>
    </>
  );
};
