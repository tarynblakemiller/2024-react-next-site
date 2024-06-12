import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

export const NavbarContext = createContext<{
  activeStates: { [key: string]: boolean };
  setActiveStates: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  isItalic: boolean;
  setIsItalic: React.Dispatch<React.SetStateAction<boolean>>;
  activeSection: string | null;
  setActiveSection: Dispatch<SetStateAction<string | null>>;
  showBio: boolean;
  setShowBio: React.Dispatch<React.SetStateAction<boolean>>;
  // isAtBottom: boolean;
  // setIsAtBottom: Dispatch<SetStateAction<boolean>>;
}>({
  activeStates: { software: false, sound: false, lighting: false },
  setActiveStates: () => {},
  activeIndex: -1,
  setActiveIndex: () => {},
  activeSection: null,
  setActiveSection: () => {},
  isItalic: false,
  setIsItalic: () => {},
  showBio: false,
  setShowBio: () => {},
});

export const NavbarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeStates, setActiveStates] = useState<{ [key: string]: boolean }>({
    software: false,
    sound: false,
    lighting: false,
  });
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [isItalic, setIsItalic] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showBio, setShowBio] = useState<boolean>(false);

  return (
    <NavbarContext.Provider
      value={{
        activeStates,
        setActiveStates,
        activeIndex,
        setActiveIndex,
        isItalic,
        setIsItalic,
        activeSection,
        setActiveSection,
        showBio,
        setShowBio,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
