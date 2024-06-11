import React, { ReactNode } from "react";
import sectionStyle from "./sectionStyles.module.css";

export interface SectionProps {
  children: ReactNode;
}

export const Section: React.FC<SectionProps> = ({ children }) => {
  return <div className={sectionStyle.sectionContainer}>{children}</div>;
};
