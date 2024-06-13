"use client";
import DropdownContainer from "@/app/components/layout/dropdown/DropdownContainer";
import SoundWaveImageButton from "@/app/components/common/sectionButtons/soundButtons/SoundSectionButton/SoundWaveImageButton";
import SoundMixesSectionImage from "@/app/components/common/image/soundMixesImage/SoundMixesImage";
import { azTracklist } from "../../../../../constants/trackLists/trackLists";
import { useState } from "react";
import mixStyles from "../../SoundStyles.module.css";

const azMix =
  "https://soundcloud.com/a2zradio/etiquette-i-trust-magic?si=b743bfb2fff0403696c92e70e58e1464&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";

const mansionsMix =
  "https://soundcloud.com/mansions-radio/wine-bar-music-with-etiquette?si=2ed7c324ef0345d88b1d54916878707a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";

export default function Mixes() {
  const [$isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!$isOpen);
  };
  return (
    <>
      <div className={mixStyles.mixContainer}>
        <div className={mixStyles.contentWrapper}>
          <div className={mixStyles.ImageWrapper}>
            <SoundMixesSectionImage
              src="/a_z.jpg"
              alt="album artwork"
              width={250}
              height={250}
              layout="fixed"
              style={{ borderRadius: "none", paddingBottom: 0 }}
            />
            <div className={mixStyles.mixContainer}>
              <SoundWaveImageButton
                soundCloudLink={azMix}
                link={"/soundwaves3.png"}
                name={"Sound wave image"}
                type={"sound waveform image"}
              />
            </div>
          </div>
          <div className={mixStyles.textWrapper} style={{ maxWidth: "350px" }}>
            <span>
              <p>
                Aired on <a href="https://www.a--z.radio/">A--Z Radio</a> -
              </p>
            </span>
            <span>
              <p>February 12, 2024</p>
            </span>
            <DropdownContainer
              title="tracklist"
              items={azTracklist}
              $isOpen={$isOpen}
              toggleDropdown={toggleDropdown}
              style={{ width: "350px" }}
            ></DropdownContainer>
          </div>
        </div>

        <div className={mixStyles.contentWrapper}>
          <div className={mixStyles.textWrapper}>
            <SoundMixesSectionImage
              src="/mansions.jpg"
              alt="album artwork"
              width={250}
              height={250}
              layout="fixed"
              style={{ borderRadius: "none", paddingBottom: 0 }}
            />
            <div className={mixStyles.soundMixButtonWrapper}>
              <SoundWaveImageButton
                soundCloudLink={mansionsMix}
                link={"/soundwaves3.png"}
                name={"Sound wave image"}
                type={"sound waveform image"}
              />
            </div>
          </div>
          <div className={mixStyles.textWrapper} style={{ maxWidth: "350px" }}>
            <span>
              <p>Recorded at Mansions Wine Bar -</p>
            </span>
            <span>
              <p> September 23rd, 2023.</p>
            </span>

            <DropdownContainer
              title="tracklist"
              items={azTracklist}
              $isOpen={$isOpen}
              toggleDropdown={toggleDropdown}
            ></DropdownContainer>
          </div>
        </div>
      </div>
    </>
  );
}
