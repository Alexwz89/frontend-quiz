import React from "react";
import { ConfigProvider, Switch } from "antd";
import { ThemeContext } from "./ThemeContext";
import { useParams } from "react-router-dom";
import moon_dark from "../assets/images/icon-moon-dark.svg";
import moon_light from "../assets/images/icon-moon-light.svg";
import sun_dark from "../assets/images/icon-sun-dark.svg";
import sun_light from "../assets/images/icon-sun-light.svg";
import html_icon from "../assets/images/icon-html.svg";
import css_icon from "../assets/images/icon-css.svg";
import javascript_icon from "../assets/images/icon-js.svg";
import accessibility_icon from "../assets/images/icon-accessibility.svg";

export default function Header() {
  const { type } = useParams();
  const { theme, toggleTheme } = React.useContext(ThemeContext);
  // 映射 type 到对应的图片资源
  const iconMap = {
    html: html_icon,
    css: css_icon,
    javascript: javascript_icon,
    accessibility: accessibility_icon,
  };

  const img_bgColor = {
    html: "#ff7f3530",
    css: "#2fd88730",
    javascript: "#306aff30",
    accessibility: "#a729f530",
  };

  const img_path = type ? iconMap[type.toLocaleLowerCase()] : "";
  const styles = type
    ? {
        backgroundColor: img_bgColor[type.toLocaleLowerCase()],
        width: "40px",
        height: "40px",
        borderRadius: "8px",
        padding: "3px",
      }
    : {};

  return (
    <header>
      <div className="type_box">
        <img src={img_path} style={styles} />
        <span>{type}</span>
      </div>
      <div className="theme_box">
        <img src={theme === "light" ? sun_dark : sun_light} />
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#A729F5",
              colorTextQuaternary: "#A729F5",
            },
          }}
        >
          <Switch onChange={toggleTheme} />
        </ConfigProvider>
        <img src={theme === "light" ? moon_dark : moon_light} />
      </div>
    </header>
  );
}
