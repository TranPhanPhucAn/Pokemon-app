import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

import { Suspense, useCallback, useContext } from "react";
import Box from "./Box";
import { IThemeConfig } from "../config/ThemeConfig";
import green from "../styles/theme/green";
import light from "../styles/theme/light";
import dark from "../styles/theme/dark";
import { ThemeContainer } from "../styles/theme/global";
import { PlaceThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const themeArray: IThemeConfig[] = [
    {
      themeName: "green",
      themeColor: "#59ab64",
      themeValue: green,
    },
    {
      themeName: "light",
      themeColor: "#f5f5f5",
      themeValue: light,
    },
    {
      themeName: "dark",
      themeColor: "#4B4453",
      themeValue: dark,
    },
  ];

  const themeContext = useContext(PlaceThemeContext);

  const themeSlection = useCallback((type: string) => {
    const selectedTheme: IThemeConfig = themeArray.filter(
      (theme) => theme.themeName === type
    )[0];
    themeContext.setNewTheme(selectedTheme.themeValue);
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <div className="flex mb-2 gap-5">
        <div className="flex items-center">
          <input
            id="home"
            type="radio"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100"
            name="radio"
          />
          <label
            htmlFor="home"
            className="ms-2 text-lg font-medium text-black  hover:cursor-pointer"
            onClick={() => navigate("/")}
          >
            Home
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="homeshiny"
            type="radio"
            value=""
            name="radio"
            className="w-4 h-4 text-blue-600 bg-gray-100"
          />
          <label
            htmlFor="homeshiny"
            className="ms-2 text-lg font-medium text-black  hover:cursor-pointer"
            onClick={() => navigate("/homeshiny")}
          >
            Home Shiny
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="dreamworld"
            type="radio"
            value=""
            name="radio"
            className="w-4 h-4 text-blue-600 bg-gray-100"
          />
          <label
            htmlFor="dreamworld"
            className="ms-2 text-lg font-medium text-black  hover:cursor-pointer"
            onClick={() => navigate("/dreamworld")}
          >
            Dream world
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="officialart"
            type="radio"
            value=""
            name="radio"
            className="w-4 h-4 text-blue-600 bg-gray-100"
          />
          <label
            htmlFor="officialart"
            className="ms-2 text-lg font-medium text-black  hover:cursor-pointer"
            onClick={() => navigate("/officialart")}
          >
            Official Artwork
          </label>
        </div>
      </div>
      <div className=" mb-5">
        <ThemeContainer>
          {themeArray.map((theme: IThemeConfig, index: number) => (
            <Box
              type={theme.themeName}
              boxColor={theme.themeColor}
              onBoxClick={themeSlection}
              key={index}
            ></Box>
          ))}
        </ThemeContainer>
      </div>
    </>
  );
};

export default Navbar;
