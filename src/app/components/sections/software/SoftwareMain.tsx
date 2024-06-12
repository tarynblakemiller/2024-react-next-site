"use client";
import React from "react";
import SoftwareCurrent from "./softwareSubSections/SoftwareCurrent";
import SoftwareTech from "./softwareSubSections/SoftwareTech";
import softwareStyles from "../sections.module.css";

export interface SoftwareMainProps {
  selectedSection: string;
  activeIndex: number | null;
  label: string;
  onSectionButtonClick: (section: string, $index: number) => void;
  section: string;
}

const SoftwareMain: React.FC<SoftwareMainProps> = ({
  selectedSection,
  activeIndex,
  label,
  onSectionButtonClick,
  section,
}) => {
  const handleButtonClick = (section: string, $index: number) => {
    onSectionButtonClick(section, $index);
  };
  return (
    <>
      {selectedSection === "software" && (
        <div className={softwareStyles.SoftwareContainer}>
          <div className={softwareStyles.sectionContainer}>
            <SoftwareTech
              activeIndex={activeIndex}
              selectedSection={selectedSection}
              label={label}
              onSectionButtonClick={handleButtonClick}
            />
            <SoftwareCurrent
              activeIndex={activeIndex}
              selectedSection={selectedSection}
              label={label}
              onSectionButtonClick={handleButtonClick}
            />
          </div>
        </div>
      )}

      {selectedSection === "technical" && (
        <div className={softwareStyles.sectionContainer}>
          <SoftwareTech
            activeIndex={activeIndex}
            selectedSection={selectedSection}
            label={label}
            onSectionButtonClick={handleButtonClick}
          />
        </div>
      )}

      {selectedSection === `${"current-project"}` && (
        <div className={softwareStyles.sectionContainer}>
          <SoftwareCurrent
            activeIndex={activeIndex}
            selectedSection={selectedSection}
            label={label}
            onSectionButtonClick={handleButtonClick}
          />
        </div>
      )}
    </>
  );
};

export default SoftwareMain;
