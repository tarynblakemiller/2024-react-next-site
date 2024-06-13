"use client";
import React from "react";
import CustomCarousel from "../../carousel/Carousel";
import carouselStyles from "../sections.module.css";

export interface LightingProps {
  buttonState?: boolean;
  $index?: number;
  activeIndex?: number | null;
  activeLightButton?: string;
  sectionLabel?: string;
  onSelectLabel?: (label: string) => void;
  selectedSection?: string;
  label?: string | null;
}

const sustainSlides = [
  { image: "/sustain1 2.jpeg", alt: "something" },
  { image: "/sustain2.jpeg", alt: "something" },
  { image: "/me_mike_sr.JPG", alt: "something" },
  { image: "/sr_crowd_nns.JPG", alt: "something" },
];

export const Lighting: React.FC<LightingProps> = () => {
  return (
    <div className={carouselStyles.sectionImageContainer}>
      <div style={{ fontSize: "12px" }}>Sustain-Release Year 7</div>
      <CustomCarousel data={sustainSlides} />

      <div style={{ fontSize: "12px" }}>
        Photo Credit:{" "}
        <a style={{ textDecoration: "none", color: "black" }} href="">
          Jennifer Medina
        </a>
      </div>
    </div>
  );
};
export default Lighting;
