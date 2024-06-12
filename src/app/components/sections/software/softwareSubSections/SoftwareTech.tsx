"use client";
import React from "react";
import softwareTech from "../../sections.module.css";

interface SoftwareTechProps {
  activeIndex: number | null;
  label: string | null;
  selectedSection: string;
  onSectionButtonClick: (section: string, index: number) => void;
  section?: string;
  $index?: number;
}

const SoftwareTech: React.FC<SoftwareTechProps> = ({
  activeIndex,
  label,
  selectedSection,
  onSectionButtonClick,
}) => {
  return (
    <>
      <div className={softwareTech.sectionContainer}>
        <div className="content-wrapper">
          <div className={softwareTech.paragraphWrapper}>
            <span
              style={{
                display: "inline-block",
                marginBottom: "10px",
              }}
            >
              <p style={{ display: "inline" }}>TECHNICAL</p>
            </span>
          </div>
          <div className={softwareTech.paragraphWrapper}>
            <span style={{ marginTop: "10px" }}>
              Frontend: React, JavaScript, TypeScript, Next.js Storybook.js,
              HTML, CSS, Styled Components, Sass
            </span>
          </div>
          <br />
          <div className={softwareTech.paragraphWrapper}>
            <span>Backend: Express.js, Node.js, GraphQL, MySQL, Firebase</span>
          </div>
          <br />
          <div className={softwareTech.paragraphWrapper}>
            <span>
              Testing & Deployment: Jest, Vercel, Heroku, Docker, Netlify
            </span>
          </div>
          <br />
          <div className={softwareTech.paragraphWrapper}>
            <span>
              Tools and Software: GTM, CircleCI, PostgreSQL, Git, GitHub, Figma
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoftwareTech;
