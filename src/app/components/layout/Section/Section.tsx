import React, { useContext, useState } from "react";
import sectionStyles from "./sectionStyles.module.css";
import SoftwareMain from "../../sections/software/SoftwareMain";
import SoundMain from "../../sections/sound/SoundMain";
import LightingMain from "../../sections/lighting/LightingMain";
import { NavbarContext } from "@/app/context/NavbarContext";
import BioPage from "../../Bio/BioPage";
import { Bio } from "../../Bio/Bio";

interface SectionComponents {
  [key: string]: React.ComponentType<any>;
}

export const sectionComponents: SectionComponents = {
  software: SoftwareMain,
  sound: SoundMain,
  lighting: LightingMain,
  bio: BioPage,
};

export interface SectionProps {
  activeIndex: number;
  onSectionButtonClick: (section: string) => void;
  activeSection: string | null;
}

const SectionTemplate: React.FC = () => {
  const { activeSection, activeIndex, setActiveIndex, isItalic } =
    useContext(NavbarContext);

  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const onSectionSelect = (section: string, index: number) => {
    setSelectedSection(section);
    setActiveIndex(index);
  };

  const ComponentToRender = activeSection
    ? sectionComponents[activeSection]
    : null;

  return (
    <>
      {isItalic && activeSection === "bio" && <BioPage />}
      {!isItalic && ComponentToRender && (
        <div className={sectionStyles.sectionContainer}>
          <ComponentToRender
            activeIndex={activeIndex} // Pass appropriate props as needed
            selectedSection={activeSection}
            onSectionButtonClick={() => {}} // Pass appropriate event handler
          />
        </div>
      )}
    </>
  );
};

export default SectionTemplate;
