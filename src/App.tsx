import React, { useState } from "react";
import "./App.css";

import { ThemeModeProvider } from "./context/themeModeProvider";
import { Theme } from "./context/themeModeContext";
import MainPage from "./pages/MainPage";
import PagesWrapper from "./components/PagesWrapper";
import SingleFilm from "./pages/SingleFilm";
import Settings from "./pages/Settings";
import SingIn from "./pages/Authorization";
import Authorization from "./pages/Authorization";
import { Route } from "react-router-dom";
import Router from "./pages/Router";

function App() {
  const [theme, setTheme] = useState<Theme>(Theme.Dark);

  const onChangeTheme = (value: Theme) => {
    setTheme(value);
  };
 
  return (
    <ThemeModeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <div className="App">
      <Router />
      </div>
    </ThemeModeProvider>
  );
}

export default App;
