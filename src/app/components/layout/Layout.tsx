"use client";
import React, { useState, useEffect, ReactNode, useContext } from "react";
import { Navbar } from "./Navbar/Navbar";
import { NavbarContext, NavbarProvider } from "@/app/context/NavbarContext";
import Footer from "./Footer/Footer";
import styles from "../../styles/style.module.css";

const indexes = [1, 4, 5];

export const sections = [
  { name: "software", index: 1 },
  { name: "sound", index: 4 },
  { name: "lighting", index: 5 },
];

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const {
    activeIndex,
    setActiveIndex,
    activeSection,
    setActiveSection,
    setActiveStates,
    showBio,
    setShowBio,
  } = useContext(NavbarContext);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleToggle = (sectionName: string, index: number) => {
    const newActiveStates = sections.reduce((acc, section) => {
      acc[section.name] = section.name === sectionName;
      return acc;
    }, {} as { [key: string]: boolean });

    setActiveStates(newActiveStates);
    setActiveIndex(index);
    setActiveSection(sectionName);
    // setShowBio(true);
  };

  const handleNavbarClick = (section: string, index: number) => {
    handleToggle(section, index);
  };

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
  }, [setIsAtBottom]);

  const handleFooterClick = (section: string, index: number) => {
    handleToggle(section, index);
    setActiveIndex(index);
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <NavbarProvider>
      <div className={styles.container}>
        <Navbar activeIndexes={indexes} onButtonClick={handleNavbarClick} />
        <main className={styles.main}>{children}</main>
        <Footer
          activeIndex={activeIndex}
          onSectionClick={handleNavbarClick}
          onFooterClick={handleFooterClick}
          isAtBottom={isAtBottom}
          activeSection={activeSection}
        />
      </div>
    </NavbarProvider>
  );
};

export default MainLayout;
