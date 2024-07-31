// import React from "react";
// import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import logo from "./pokemon.jpg";
import Icon from "./logo";
import Router from "./routes/Router";
import { useReducer, useState } from "react";
import { IPlaceThemeProvider, PlaceThemeContext } from "./context/ThemeContext";
import ThemeReducer from "./context/ThemeReducer";
import GlobalStyle from "./styles/theme/global";
import { ThemeProvider } from "styled-components";
import green from "./styles/theme/green";
function App() {
  const [currentTheme, setNewTheme] = useReducer(ThemeReducer, []);
  const [search, setSearch] = useState<string>("");
  const themeContextProviderValue: IPlaceThemeProvider = {
    currentTheme,
    setNewTheme,
  };
  if (Array.isArray(currentTheme) && !currentTheme.length) {
    setNewTheme(green);
  }
  const handleChage = (event: any) => {
    setSearch(event.target.value);
  };
  return (
    <PlaceThemeContext.Provider value={themeContextProviderValue}>
      <ThemeProvider theme={currentTheme.updatedTheme}>
        <GlobalStyle />
        <div className="App max-w-7xl mx-auto">
          {/* <div>
            <img alt="logo" src={logo} />
          </div> */}
          <div className="p-5 flex justify-center items-center">
            <Icon />
          </div>
          <div className="flex gap-10">
            <div className="w-5/12">
              <input
                type="text"
                value={search}
                onChange={(event) => handleChage(event)}
                className="pl-6 text-black text-lg w-full h-12 rounded-3xl focus:ring-blue-500 focus:border-blue-500 text-balance"
                placeholder="Enter your pokemon name"
              />
            </div>
            <div>
              <Navbar />
            </div>
          </div>
          <Router searchpoke={search} />
        </div>
      </ThemeProvider>
    </PlaceThemeContext.Provider>
  );
}

export default App;
