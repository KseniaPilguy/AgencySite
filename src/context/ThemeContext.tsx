import { createContext, useContext, useLayoutEffect, useState } from "react";

export enum ThemeEnum {
  light = 'light',
  dark = 'dark'
}

interface ThemeContextInterface {
  theme: ThemeEnum;
  toggleTheme(val: ThemeEnum): void;
}

interface ContextProviderInterface {
  children: JSX.Element | JSX.Element[];
}

export const ThemeContext = createContext<ThemeContextInterface>({} as ThemeContextInterface);

export const ThemeContextProvider = ({children}: ContextProviderInterface) => {
  const initialTheme = () => localStorage.getItem("PLATFORM_THEME") as ThemeEnum || ThemeEnum.dark;
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () =>
    setTheme((theme) => (theme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light));

  const value = {
    theme,
    toggleTheme
  };

  useLayoutEffect(() => {
    localStorage.setItem("PLATFORM_THEME", theme);
    if (theme === ThemeEnum.light) {
      document.documentElement.classList.remove("dark-mode");
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
      document.documentElement.classList.add("dark-mode");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
};

export const useThemeContext = () => useContext(ThemeContext);
