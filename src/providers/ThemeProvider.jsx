import { useState, createContext, useContext } from "react";
 export const ThemeContext = createContext();

export function useTheme(){
  return useContext(ThemeContext)
}

export default function ThemeProvider(props) {
  const [isLightTheme, setIsLightTheme] = useState(false);

  function toggleTheme() {
    setIsLightTheme(!isLightTheme);
  }

  return (
    <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
