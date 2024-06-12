import React, { useContext } from "react";
import { ToggleButton } from "../../common/ToggleButton/ToggleButton";
import styles from "./navBar.module.css";
import cvStyles from "../../../styles/style.module.css";
import { Bio } from "../../sections/bio/Bio";
import { NavbarContext } from "@/app/context/NavbarContext";

interface NavbarProps {
  activeIndexes: number[];
  onButtonClick: (section: string, index: number) => void;
  isItalic: boolean; // Receive isItalic prop
  setIsItalic: (value: boolean) => void;
}

const sections = [
  { name: "software", index: 1 },
  { name: "sound", index: 4 },
  { name: "lighting", index: 5 },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeIndexes,
  onButtonClick,
  isItalic,
  setIsItalic,
}) => {
  const {
    activeStates,
    setActiveStates,
    activeIndex,
    setActiveIndex,
    activeSection,
    setActiveSection,
  } = useContext(NavbarContext);

  console.log("activeStates:", activeStates);
  console.log("activeIndex:", activeIndex);
  console.log("isItalic:", isItalic);

  console.log("activeSection:", activeSection);

  const handleToggle = (sectionName: string, index: number) => {
    const newActiveStates = sections.reduce((acc, section) => {
      acc[section.name] = section.name === sectionName;
      return acc;
    }, {} as { [key: string]: boolean });

    setActiveStates(newActiveStates);
    setActiveIndex(index);
    setActiveSection(sectionName);
    setIsItalic(sectionName === "bio");
  };

  const handleNavbarClick = (section: string, index: number) => {
    setActiveIndex(index);
    handleToggle(section, index);
  };

  const handleBioClick = () => {
    // setIsItalic(true); // Set isItalic to true when Bio is clicked
    // // Reset other active sections
    setActiveStates({
      software: false,
      sound: false,
      lighting: false,
    });
    setActiveIndex(0); // Reset active index
    setActiveSection("bio"); // Set active section to bio
  };

  const resetSectionButtonStates = () => {
    // window.history.pushState(null, "Home", "/");
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
        onClick={() => {
          const newIsItalic = !isItalic;
          setIsItalic(newIsItalic);
          if (newIsItalic) {
            resetSectionButtonStates();
            handleToggle("bio", 0);
          } else {
            setActiveSection(null);
            setActiveIndex(-1);
          }
        }}
        isItalic={isItalic}
        resetSectionButtonStates={resetSectionButtonStates}
        isActive={isItalic}
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
              onToggle={() => handleNavbarClick(section.name, section.index)}
              activeText={`${section.name}`}
              inactiveText={`${section.name}`}
              activeSection={activeSection}
            />
          ))}
      </div>
    </>
  );
};
