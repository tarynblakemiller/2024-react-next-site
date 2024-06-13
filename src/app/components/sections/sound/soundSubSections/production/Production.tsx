"use client";
import DropdownContainer from "@/app/components/layout/dropdown/DropdownContainer";
import SoundButton from "@/app/components/common/sectionButtons/soundButtons/SoundButton";
import SoundMixesSectionImage from "@/app/components/common/image/soundMixesImage/SoundMixesImage";
import { twiceCredits } from "../../../../../constants/creditLists/creditLists";
import { useState } from "react";
import soundStyles from "../../SoundStyles.module.css";
import productionStyles from "./ProductionStyles.module.css";

const bandcampLink = "https://etiquette-tbm.bandcamp.com/track/twice-remix";
const soundCloudLink =
  "https://soundcloud.com/your-friend-taryn-blake/etiquette-twice-remix?si=3e1aedfef0184b31a4a4774bdac96e5c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing";

export default function Production() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={productionStyles.productionContainer}>
        <hr />
        <div className={soundStyles.contentWrapper}>
          <div className={soundStyles.imageWrapper}>
            <SoundMixesSectionImage
              src="/twice_art.jpg"
              alt="album artwork"
              width={300}
              height={300}
              style={{ borderRadius: "none", paddingBottom: "5px" }}
            />
            <span
              style={{
                letterSpacing: "0.25px",
                marginTop: "10px",
              }}
            >
              etiquette - twice (remix)
            </span>
            <div className={soundStyles.soundButtonContainer}>
              <div className={productionStyles.soundProductionButtonWrapper}>
                <SoundButton link={bandcampLink} name="bandcamp" type="text" />
              </div>
              <div className={productionStyles.soundProductionButtonWrapper}>
                <SoundButton
                  link={soundCloudLink}
                  name="soundcloud"
                  type="text"
                />
              </div>
            </div>

            <DropdownContainer
              title="credits"
              items={twiceCredits}
              $isOpen={isOpen}
              toggleDropdown={toggleDropdown}
              style={{ width: "400px" }}
            />
          </div>
          <div className={soundStyles.textWrapper}>
            <div className={soundStyles.styledTextSection}>
              <p className={productionStyles.trackSectionParagraph}>
                <p style={{ padding: 0 }}>
                  this track marks my first release under the alias etiquette,
                  as well as produced track, of music personal to me since 2016,
                  alongside some peers that i have admired most.
                </p>{" "}
                <br />
                <p>
                  the original track at its core has a spot secured in my life’s
                  history and i hope the sentiment can be felt somewhere in
                  there.{" "}
                </p>
                <br />
                thank you for listening.
              </p>
            </div>
          </div>
        </div>

        <span>
          <p
            style={{
              marginBottom: "10px",
              marginTop: "10px",
              fontSize: "14px",
            }}
          >
            released february 2, 2024
          </p>
        </span>

        <span>
          <p style={{ marginBottom: "10px", fontSize: "14px" }}>
            © all rights reserved
          </p>
        </span>
      </div>
    </>
  );
}
