// SectionContext.tsx
import React, { createContext, useContext, useState } from "react";

interface SectionContextProps {
  selectedSection: string | null;
  activeIndex: number;
  onSectionSelect: (section: string, index: number) => void;
}

const SectionContext = createContext<SectionContextProps | undefined>(
  undefined
);

export const SectionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const onSectionSelect = (section: string, index: number) => {
    setSelectedSection(section);
    setActiveIndex(index);
  };

  return (
    <SectionContext.Provider
      value={{ selectedSection, activeIndex, onSectionSelect }}
    >
      {children}
    </SectionContext.Provider>
  );
};

export const useSectionContext = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error("useSectionContext must be used within a SectionProvider");
  }
  return context;
};
