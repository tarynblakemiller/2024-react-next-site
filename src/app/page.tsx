"use client";
import styles from "../app/styles/style.module.css";
import { Navbar, NavbarContext } from "./components/layout/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import Footer from "./components/layout/Footer/Footer";

interface Props {}

const indexes: number[] = [1, 4, 5];

export const sections = [
  { name: "software", index: 1 },
  { name: "sound", index: 4 },
  { name: "lighting", index: 5 },
];

const Home: React.FC<Props> = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeStates, setActiveStates] = useState<{ [key: string]: boolean }>({
    software: false,
    sound: false,
    lighting: false,
  });
  const [isItalic, setIsItalic] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleToggle = (sectionName: string, index: number) => {
    const newActiveStates = sections.reduce((acc, section) => {
      acc[section.name] = section.name === sectionName;
      return acc;
    }, {} as { [key: string]: boolean });

    setActiveStates(newActiveStates);
    setActiveIndex(index);
    setActiveSection(sectionName);
  };

  const handleNavbarClick = (section: string, index: number) => {
    setActiveIndex(index);
    handleToggle(section, index);
  };

  const handleFooterClick = (section: string, index: number) => {
    handleToggle(section, index);
    setActiveIndex(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [themeValue, setThemeValue] = useState<"light" | "dark">("light");

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
          <Navbar activeIndexes={indexes} onButtonClick={handleNavbarClick} />

          <main className={styles.main}></main>
          <div className={styles.flexContainer}></div>
          <a className={styles.email} href="mailto:webmaster@example.com">
            yourfriendtaryn@gmail.com
          </a>
        </div>
        <hr className={styles.hr} />
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} style={{ height: "100px", border: "1px solid black" }}>
            Dummy Content {i + 1}
          </div>
        ))}
        <Footer
          activeIndex={activeIndex}
          activeSection={activeSection}
          onSectionClick={handleNavbarClick}
          onFooterClick={handleFooterClick}
          isAtBottom={isAtBottom}
        />
      </div>
    </NavbarContext.Provider>
  );
};

export default Home;
