"use client";

import React, {
  ReactNode,
  SetStateAction,
  createContext,
  FC,
  useState,
  useContext,
} from "react";

interface ThemeContextType {
  themeValue: "light" | "dark";
  setThemeValue: React.Dispatch<SetStateAction<"light" | "dark">>;
}

export const ThemeContext = createContext<ThemeContextType>({
  themeValue: "light",
  setThemeValue: () => {},
});

export const useTheme = () => useContext(ThemeContext);

interface Props {
  children: ReactNode;
  initial?: "light" | "dark";
}
export const ThemeContextProvider: FC<Props> = ({
  children,
  initial = "light",
}) => {
  const [themeValue, setThemeValue] = useState(initial);
  return (
    <ThemeContext.Provider value={{ themeValue, setThemeValue }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ("use client");

// import React, { useState, createContext, useContext } from "react";

// const ThemeContext = createContext(null);

// export const useTheme = () => useContext(ThemeContext);

// const ThemeProvider = ({ children }) => {
//   const [themeValue, setThemeValue] = useState("light");

//   return (
//     <ThemeContext.Provider value={{ themeValue, setThemeValue }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeProvider;

//1st step is what value we want to provide to all children

//for now just a constant

//pass a default value if there isn't a provider
//will fall back to this value if not found in tree
// const ThemeContext = createContext(null);

//give the theme a type

// interface ThemeContextType {
//   themeValue: "light" | "dark";
// }

// export const ThemeContext = createContext<ThemeContextType>({
//   themeValue: "light",
// });

//2. provide the context to the children in the tree that need to know what the current value is
//by utilizing the provider in the App
