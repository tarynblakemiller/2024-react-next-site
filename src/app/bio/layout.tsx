import React from "react";
import { Section } from "../components/layout/Section/Section";
import aboutStyle from "../components/layout/Section/sectionStyles.module.css";

const BioPage = () => {
  return (
    <Section>
      <p className={aboutStyle.paragraphWrapper}>KS born, Brooklyn based.</p>
      <p className={aboutStyle.paragraphWrapper}>
        artist, builder, thinker, engineer.{" "}
      </p>
    </Section>
  );
};

export default BioPage;
