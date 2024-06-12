import React, { useContext } from "react";
import { ToggleButton } from "../../common/ToggleButton/ToggleButton";
import styles from "./navBar.module.css";
import cvStyles from "../../../styles/style.module.css";
import { Bio } from "../../Bio/Bio";
import { NavbarContext } from "@/app/context/NavbarContext";

interface NavbarProps {
  activeIndexes: number[];
  onButtonClick: (section: string, index: number) => void;
}

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
    activeSection,
    setActiveSection,
  } = useContext(NavbarContext);

  console.log("activeStates:", activeStates);
  console.log("activeIndex:", activeIndex);
  console.log("isItalic:", isItalic);
  console.log("showBio:", showBio);
  console.log("activeSection:", activeSection);

  const handleToggle = (sectionName: string, index: number) => {
    const newActiveStates = sections.reduce((acc, section) => {
      acc[section.name] = section.name === sectionName;
      return acc;
    }, {} as { [key: string]: boolean });

    setActiveStates(newActiveStates);
    setActiveIndex(index);
    setActiveSection(sectionName);
    setIsItalic(false);
    // setShowBio(!showBio);
    // toggleBioPage();
  };

  const handleNavbarClick = (section: string, index: number) => {
    setActiveIndex(index);
    handleToggle(section, index);
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
              onToggle={() => handleNavbarClick(section.name, section.index)}
              activeText={`${section.name}`}
              inactiveText={`${section.name}`}
            />
          ))}
      </div>
      <div className={styles.flexContainer}></div>
      <a className={styles.email} href="mailto:webmaster@example.com">
        yourfriendtaryn@gmail.com
      </a>
      <hr className={styles.hr} />
    </>
  );
};
