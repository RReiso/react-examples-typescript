import React, { useState, createContext, ReactNode, useContext } from "react";

// -------- CONTEXT --------
interface IThemeContext {
  dark: boolean;
  toggleDark: () => void;
}

const initialState = { dark: false, toggleDark: () => {} };

const ThemeContext = createContext<IThemeContext>(initialState);
export const useThemeContext = () => useContext(ThemeContext); // hook

// -------- PROVIDER --------
type ThemeProviderProps = {
  children: ReactNode;
};

// export const ThemeProvider: FC<{ children: ReactNode}> = ({ children }) => {   --- OR ---
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [dark, setDark] = useState(initialState.dark);

  const toggleDark = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
