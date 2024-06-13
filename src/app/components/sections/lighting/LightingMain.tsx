"use client";
import React from "react";
import Lighting from "./Lighting";
import LightingStyles from "./LightingStyles.module.css";
import LightingClubs from "./lightingSubSections/LightingClubs";
import LightingCompanies from "./lightingSubSections/LightingCompanies";
import LightingEvents from "./lightingSubSections/LightingEvents";

export interface LightingMainProps {
  selectedSection: string;
  activeIndex: number;
  label: string;
  section: string;
}

const LightingMain: React.FC<LightingMainProps> = ({
  selectedSection,
  activeIndex,
  label,
}) => {
  return (
    <>
      <div>
        <>
          {selectedSection === "lighting" && <Lighting />}
          {selectedSection === "clubs" && <LightingClubs />}
          {selectedSection === "companies" && <LightingCompanies />}
          {selectedSection === "events" && <LightingEvents />}
        </>
      </div>
    </>
  );
};

export default LightingMain;
