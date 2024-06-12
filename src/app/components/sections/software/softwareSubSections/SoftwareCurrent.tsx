"use client";
// import TechButton, {
//   TechButtonContainer,
// } from "@/components/common/buttons/TechButton/TechButton";

// import { BannerWrapper } from "../../common/presentational/Image/SectionImage";

import softwareCurrent from "../../sections.module.css";

export interface SoftwareCurrentProps {
  activeIndex?: number | null;
  label: string | null;
  selectedSection: string;
  onSectionButtonClick: (section: string, index: number) => void;
}

const SoftwareCurrent: React.FC<SoftwareCurrentProps> = ({
  selectedSection,
  onSectionButtonClick,
}) => {
  const handleButtonClick = (section: string, $index: number) => {
    onSectionButtonClick(section, $index);
  };
  return (
    <>
      <div className={softwareCurrent.sectionContainer}>
        {selectedSection === "software" && (
          <div className="content-wrapper">
            <div
              className={softwareCurrent.paragraphWrapper}
              style={{ marginBottom: "10px" }}
            >
              <span style={{ display: "inline-block" }}>
                <p style={{ padding: "0" }}>CURRENTLY:</p>
                <p>
                  <a
                    className="mobile-app"
                    href="https://github.com/tarynblakemiller"
                  >
                    Dig This (Mobile App)
                  </a>
                </p>
              </span>

              {/* <TechButtonContainer>
                <TechButton></TechButton>
              </TechButtonContainer> */}
            </div>
            <div
              className={softwareCurrent.textWrapper}
              style={{ maxWidth: "300px" }}
            >
              <div className={softwareCurrent.paragraphWrapper}>
                <span>
                  Dig This is a web app developed by{" "}
                  <a href="https://www.robysaavedra.com/">Roby Saavedra</a> who
                  graciously has given me his blessing in developing a mobile
                  version.
                </span>
              </div>
            </div>
            <div
              className={softwareCurrent.textWrapper}
              style={{ maxWidth: "300px" }}
            >
              <div className={softwareCurrent.paragraphWrapper}>
                <span>
                  You choose from a selection of music styles and receive a
                  random music selection from the
                  <a href="https://www.discogs.com/my">Discogs </a>database.
                </span>
              </div>
            </div>
            <br />
            <span>Click the refersh button to get a new batch of styles.</span>
          </div>
        )}
      </div>

      <div className={softwareCurrent.sectionContainer}>
        {selectedSection === "current-project" && (
          <div className="content-wrapper">
            <div className={softwareCurrent.paragraphWrapper}>
              <span style={{ display: "inline-block" }}>
                <p
                  style={{
                    padding: "0",
                    marginBottom: "10px",
                  }}
                >
                  CURRENTLY:
                </p>
              </span>
              {/* <ImageWrapper>
                <BannerWrapper src={"/dig_this_img.png"}></BannerWrapper>
              </ImageWrapper> */}
              <span>
                <p>
                  <a
                    className="mobile-app"
                    href="https://github.com/tarynblakemiller"
                  >
                    Dig This (Mobile App)
                  </a>
                </p>
              </span>
              {/* <TechButtonContainer>
                <TechButton></TechButton>
              </TechButtonContainer> */}
            </div>
            <div className={softwareCurrent.paragraphWrapper}>
              <span>
                Dig This is a web app developed by{" "}
                <a href="https://www.robysaavedra.com/">Roby Saavedra</a> who
                graciously has given me his blessing in developing a mobile
                version.
              </span>
            </div>
            <div className={softwareCurrent.ParagraphWrapper}>
              <span>
                You choose from a selection of music styles and receive a random
                music selection from the{" "}
                <a href="https://www.discogs.com/my">Discogs </a>database.
              </span>
            </div>
            <span>Click the refersh button to get a new batch of styles.</span>
          </div>
        )}
      </div>
    </>
  );
};

export default SoftwareCurrent;
