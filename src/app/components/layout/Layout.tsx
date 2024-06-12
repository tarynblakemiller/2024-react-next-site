"use client";
import React, { useState, useEffect, useContext, ReactNode } from "react";
import { ToggleButton } from "../common/ToggleButton/ToggleButton";
import Footer from "./Footer/Footer";
import { NavbarContext, NavbarProvider } from "@/app/context/NavbarContext";
import styles from "../../styles/style.module.css";
import { Bio } from "../Bio/Bio";
import { Navbar } from "./Navbar/Navbar";

export const indexes = [1, 4, 5];

export const sections = [
  { name: "software", index: 1 },
  { name: "sound", index: 4 },
  { name: "lighting", index: 5 },
];

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [isItalic, setIsItalic] = useState<boolean>(false);
  const [showBio, setShowBio] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeStates, setActiveStates] = useState<{ [key: string]: boolean }>({
    software: false,
    sound: false,
    lighting: false,
  });

  const [isAtBottom, setIsAtBottom] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggle = (sectionName: string, index: number) => {
    const newActiveStates = sections.reduce((acc, section) => {
      acc[section.name] = section.name === sectionName;
      return acc;
    }, {} as { [key: string]: boolean });

    setActiveStates(newActiveStates);
    setActiveIndex(index);
    setActiveSection(sectionName);
    setIsItalic(false);
    setShowBio(true);
  };

  const handleNavbarClick = (section: string, index: number) => {
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

  const handleFooterClick = (sectionName: string, index: number) => {
    handleToggle(sectionName, index);
    setActiveIndex(index);
    setActiveSection(sectionName);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <NavbarContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
        activeStates,
        setActiveStates,
        activeSection,
        setActiveSection,
        isItalic,
        setIsItalic,
        showBio,
        setShowBio,
      }}
    >
      <div className={styles.container}>
        <div>
          <Navbar activeIndexes={indexes} onButtonClick={handleNavbarClick} />
          <div className={styles.flexContainer}></div>
          <a className={styles.email} href="mailto:webmaster@example.com">
            yourfriendtaryn@gmail.com
          </a>
          <hr className={styles.hr} />
        </div>
        <main className={styles.main}>{children}</main>
        <Footer
          activeIndex={activeIndex}
          onSectionClick={handleNavbarClick}
          onFooterClick={handleFooterClick}
          activeSection={activeSection}
          isAtBottom={isAtBottom}
        />
      </div>
    </NavbarContext.Provider>
  );
};

export default MainLayout;
