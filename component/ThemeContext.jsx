import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((prevThem) => (prevThem === "light" ? "dark" : "light"));

  useEffect(() => {
    document.body.style.setProperty(
      "--background",
      theme === "light" ? "#F4F6FA" : "#313E51"
    );
    document.body.style.setProperty(
      "--text-color",
      theme === "light" ? "#313E51" : "#F4F6FA"
    );
    document.body.style.setProperty(
      "--background-image",
      theme === "light"
        ? `url("/assets/images/pattern-background-desktop-light.svg")`
        : `url("/assets/images/pattern-background-desktop-dark.svg")`
    );
    document.body.style.setProperty(
      "--btn-background",
      theme === "light" ? "#fff" : "#3B4D66"
    );
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
