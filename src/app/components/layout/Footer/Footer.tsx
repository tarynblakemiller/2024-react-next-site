import React, { ReactNode } from "react";
import { FooterButton } from "../../common/FooterButton/FooterButton";
import { NavbarContext } from "../Navbar/Navbar";
import { useContext, useRef, useState, useEffect } from "react";
import footerStyles from "./footerStyles.module.css";
import { sections } from "@/app/page";
// import { ThemeContext } from "@/app/context/ThemeContext";

const links = [
  { text: "li", url: "https://www.linkedin.com/in/tarynblakemiller" },
  { text: "gh", url: "https://github.com/tarynblakemiller" },
  { text: "tw", url: "https://twitter.com/yourfriendtaryn" },
  { text: "ig", url: "https://www.instagram.com/tarynblakemiller" },
  { text: "sc", url: "https://soundcloud.com/yourfriendtarynblake" },
];

export interface FooterProps {
  activeIndex: number | null;
  onSectionClick: (section: string, index: number) => void;
  onFooterClick: (section: string, index: number) => void;
  activeSection: string | null;
  isAtBottom: boolean;
}

const Footer: React.FC<FooterProps> = ({
  activeIndex,
  onFooterClick,
  onSectionClick,
  isAtBottom,
  activeSection,
}) => {
  const { activeStates } = useContext(NavbarContext);
  const [hasFooterButtonsRendered, setHasFooterButtonsRendered] =
    useState(false);
  const activeIndexRef = useRef<number | null>(activeIndex);
  const activeSectionRef = useRef<string | null>(activeSection);

  const renderFooterLinks = () => {
    return links.map((link, index) => (
      <div className={footerStyles.footerButtonWrapper} key={index}>
        <a className={footerStyles.footerAnchor} href={link.url}>
          {link.text}
        </a>
      </div>
    ));
  };

  activeIndexRef.current = activeIndex;
  activeSectionRef.current = activeSection;

  const renderSectionButtons = () => {
    let buttonsToRender: { name: string; index: number }[] = [];
    if (!isAtBottom) {
      return null;
    } else if (activeSectionRef.current) {
      // If scrolled to bottom and an active section exists, filter out the active section
      buttonsToRender = sections.filter(
        (section) => section.name !== activeSectionRef.current
      );
    } else {
      // If not at the bottom or no active section, render the appropriate sections based on activeIndex
      switch (activeIndexRef.current) {
        case 1:
          buttonsToRender = [
            { name: "sound", index: 1 },
            { name: "lighting", index: 2 },
          ];
          break;
        case 4:
          buttonsToRender = [
            { name: "software", index: 0 },
            { name: "lighting", index: 2 },
          ];
          break;
        case 5:
          buttonsToRender = [
            { name: "software", index: 0 },
            { name: "sound", index: 1 },
          ];
          break;
        default:
          buttonsToRender = [
            { name: "software", index: 0 },
            { name: "sound", index: 1 },
            { name: "lighting", index: 2 },
          ];
          break;
      }
    }

    return buttonsToRender.map((section, index) => (
      <FooterButton
        key={index}
        onClick={() => {
          onFooterClick(section.name, section.index);
          onSectionClick(section.name, section.index);
          setHasFooterButtonsRendered(true);
        }}
        activeText={section.name}
        sectionName={section.name}
        index={section.index}
        activeSection={section.name}
        inactiveText={section.name}
        isActive={activeStates[section.index]}
        activeIndex={section.index}
      />
    ));
  };
  useEffect(() => {
    // Reset hasFooterButtonsRendered when isAtBottom becomes false
    if (!isAtBottom) {
      setHasFooterButtonsRendered(false);
    }
  }, [isAtBottom]);
  return (
    <div className={footerStyles.footerContainer}>
      <div className={footerStyles.footerInnerContainer}>
        {renderFooterLinks()}
      </div>
      {isAtBottom && !hasFooterButtonsRendered && (
        <div className={footerStyles.footerInnerSectionContainer}>
          <div className={footerStyles.footerSectionButton}>
            {renderSectionButtons()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
