import React from "react";
import Sound from "./Sound";
import Mixes from "./soundSubSections/mixes/Mixes";
import Production from "./soundSubSections/production/Production";
import Discography from "./soundSubSections/discography/Discography";
import Score from "./soundSubSections/score/Score";
import Press from "./soundSubSections/press/Press";

export interface SoundMainProps {
  selectedSection: string;
  activeIndex: number | null;
  label: string;
  section: string;
}

const SoundMain: React.FC<SoundMainProps> = ({
  selectedSection,
  activeIndex,
  label,
  section,
}) => {
  return (
    <>
      <div className="content-wrapper">
        <>
          {selectedSection === "sound" && (
            <Sound
              activeIndex={activeIndex}
              selectedSection={selectedSection}
              label={label}
              section={section as string}
            />
          )}
          {selectedSection === "mixes" && <Mixes />}
          {selectedSection === "production" && <Production />}
          {selectedSection === "discography" && <Discography />}
          {selectedSection === "press" && <Press />}
          {selectedSection === "score" && <Score />}
        </>
      </div>
    </>
  );
};

export default SoundMain;
