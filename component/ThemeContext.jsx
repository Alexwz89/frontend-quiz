import React, { createContext, useState, useEffect } from "react";
// 重新使用导入方式，这样在构建时会正确处理资源路径
import lightBackground from "../assets/images/pattern-background-desktop-light.svg";
import darkBackground from "../assets/images/pattern-background-desktop-dark.svg";

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

    // 使用导入的资源，这样webpack会处理路径问题
    const bgImage = theme === "light" ? lightBackground : darkBackground;

    document.body.style.backgroundImage = `url(${bgImage})`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "top center";

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
