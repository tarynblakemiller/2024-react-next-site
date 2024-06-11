import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
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
  activeSection: string | null;
  setActiveSection: Dispatch<SetStateAction<string | null>>;
  showBio: boolean;
  setShowBio: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  activeStates: { software: false, sound: false, lighting: false },
  setActiveStates: () => {},
  activeIndex: -1,
  setActiveIndex: () => {},
  activeSection: null,
  setActiveSection: () => {},
  isItalic: false,
  setIsItalic: () => {},
  showBio: false,
  setShowBio: () => {},
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
  const {
    activeStates,
    setActiveStates,
    activeIndex,
    setActiveIndex,
    isItalic,
    setIsItalic,
    showBio,
    setShowBio,
  } = useContext(NavbarContext);

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

  const toggleBioPage = () => {
    if (!showBio) {
      window.history.pushState(null, "Bio", "/bio");
    } else {
      window.history.pushState(null, "Home", "/");
    }
  };

  const toggleItalic = () => {
    setIsItalic((prev) => !prev);

    resetSectionButtonStates();
    setShowBio(!showBio);
    toggleBioPage();
  };

  const resetSectionButtonStates = () => {
    window.history.pushState(null, "Home", "/");
    setActiveStates({
      software: false,
      sound: false,
      lighting: false,
    });

    setActiveIndex(-1);
  };

  return (
    <>
      <Bio
        onClick={toggleItalic}
        showBio={showBio}
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
    </>
  );
};
