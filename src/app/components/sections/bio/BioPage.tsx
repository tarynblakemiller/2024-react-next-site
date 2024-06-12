import React from "react";
import aboutStyle from "../sections.module.css";

const BioPage = () => {
  return (
    <div className={aboutStyle.sectionContainer}>
      <p className={aboutStyle.paragraphWrapper}>KS born, Brooklyn based.</p>
      <p className={aboutStyle.paragraphWrapper}>
        artist, builder, thinker, engineer.{" "}
      </p>
    </div>
  );
};

export default BioPage;
