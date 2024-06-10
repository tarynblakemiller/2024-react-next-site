import React, { ReactNode } from "react";
import { FooterButton } from "../../common/FooterButton/FooterButton";
import { NavbarContext } from "../Navbar/Navbar";
import { useContext } from "react";
import footerStyles from "./footerStyles.module.css";
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
  isActive?: boolean;
  onSectionClick: (section: string, index: number) => void;
  onFooterClick: (section: string, index: number) => void;
  activeText?: string;
  inactiveText?: string;
  activeSection: string | null;
  isAtBottom: boolean;
}

const Footer: React.FC<FooterProps> = ({
  activeIndex,
  onSectionClick,
  onFooterClick,
  activeSection,
  isAtBottom,
}) => {
  const { activeStates } = useContext(NavbarContext);

  // const { themeValue, setThemeValue } = useContext(ThemeContext);

  const renderFooterLinks = () => {
    //passing context
    //const {} = useContext(ThemeContext) and import at the top
    return links.map((link, index) => (
      <div className={footerStyles.footerButtonWrapper} key={index}>
        <a className={footerStyles.footerAnchor} href={link.url}>
          {link.text}
        </a>
      </div>
    ));
  };
  const renderSectionButtons = () => {
    if (!isAtBottom) {
      return null;
    } else if (isAtBottom && !activeSection) {
      activeIndex = 10;
    }
    let buttonsToRender: string[] = [];
    switch (activeIndex) {
      case 1:
        buttonsToRender = ["sound", "lighting"];
        break;
      case 4:
        buttonsToRender = ["software", "lighting"];
        break;
      case 5:
        buttonsToRender = ["software", "sound"];
        break;
      case 10:
        buttonsToRender = ["software", "sound", "lighting"];
      default:
        break;
    }
    return buttonsToRender.map((section, index) => (
      <FooterButton
        key={index}
        onClick={() => onFooterClick(section, index)}
        activeText={section}
        sectionName={section}
        index={index}
        activeSection={section}
        inactiveText={section}
        isActive={activeStates[section]}
        activeIndex={index}
      />
    ));
  };

  return (
    <div className={footerStyles.footerContainer}>
      <div className={footerStyles.footerInnerContainer}>
        {renderFooterLinks()}
      </div>
      <div className={footerStyles.footerInnerSectionContainer}>
        <div className={footerStyles.footerSectionButton}>
          {renderSectionButtons()}
        </div>
      </div>
    </div>
  );
};

export default Footer;
