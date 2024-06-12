"use client";
import { NavbarContext } from "@/app/context/NavbarContext";
import React, { useEffect, useState } from "react";
import styles from "../../styles/style.module.css";
import Footer from "./footer/Footer";
import { Navbar } from "./navbar/Navbar";
import SectionTemplate, {
  sectionComponents,
} from "../sections/sectionTemplate/Section";

export const indexes = [0, 1, 4, 5];

export const sections = [
  { name: "bio", index: 0 },
  { name: "software", index: 1 },
  { name: "sound", index: 4 },
  { name: "lighting", index: 5 },
];

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeStates, setActiveStates] = useState<{ [key: string]: boolean }>({
    software: false,
    sound: false,
    lighting: false,
  });

  const [isAtBottom, setIsAtBottom] = useState<boolean>(false);
  const [isItalic, setIsItalic] = useState<boolean>(false);

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
    setIsItalic(sectionName === "bio");
  };

  const handleNavbarClick = (section: string, index: number) => {
    handleToggle(section, index);
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
      }}
    >
      <div className={styles.container}>
        <div>
          <Navbar
            activeIndexes={indexes}
            onButtonClick={handleNavbarClick}
            isItalic={isItalic}
            setIsItalic={setIsItalic}
          />
          <div className={styles.flexContainer}></div>
          <a className={styles.email} href="mailto:webmaster@example.com">
            yourfriendtaryn@gmail.com
          </a>
          <hr className={styles.hr} />
        </div>
        <main className={styles.main}>
          <SectionTemplate />
          {children}
        </main>
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
