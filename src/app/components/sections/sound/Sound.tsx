"use client";
import CustomCarousel from "../../carousel/Carousel";
import React from "react";
import soundStyles from "../sections.module.css";

export interface SoundProps {
  buttonState?: boolean;
  $index?: number;
  activeIndex?: number | null;
  activeSectionButton?: string;
  sectionLabel?: string;
  onSelectLabel?: (label: string) => void;
  selectedSection?: string;
  label?: string | null;
  section: string;
}

const soundSlides = [
  { image: "/pr_me_close_guitar.JPG", alt: "public records" },
  { image: "/pr_side_band.JPG", alt: "public records" },
  { image: "/pr_far_back_shot.JPG", alt: "public records" },
  { image: "/pr_blue_guitar.JPG", alt: "public records" },
  { image: "/julie_me_22.JPG", alt: "public records" },
];

const Sound: React.FC<SoundProps> = ({ $index, activeIndex, section }) => {
  return (
    <>
      <div className={soundStyles.sectionImageBlock}>
        <div
          className={soundStyles.sectionImageContainer}
          style={{ position: "relative" }}
        >
          <div>
            <span style={{ fontSize: "12px" }}>Public Records</span>

            <CustomCarousel data={soundSlides} />

            <span style={{ fontSize: "12px" }}>
              Photo Credit:
              <a
                style={{ textDecoration: "underline" }}
                href="https://www.instagram.com/jamie.jar/?hl=en"
              >
                Jamie Jar
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sound;
