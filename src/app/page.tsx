"use client";
import { useContext } from "react";
import BioPage from "./components/Bio/BioPage";
import { NavbarContext } from "./context/NavbarContext";

const HomePage = () => {
  const { showBio } = useContext(NavbarContext);
  return (
    <>
      {showBio ? <BioPage /> : <></>}
      {Array.from({ length: 50 }).map((_, i) => (
        <div key={i} style={{ height: "100px", border: "1px solid black" }}>
          Dummy Content {i + 1}
        </div>
      ))}
    </>
  );
};

export default HomePage;
