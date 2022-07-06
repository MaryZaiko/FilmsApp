import React, { useState } from "react";
import "./App.css";

import { ThemeModeProvider } from "./context/themeModeProvider";
import { Theme } from "./context/themeModeContext";
import Router from "./pages/Router";
import {Provider} from 'react-redux'
import { store } from "./redux/store";

function App() {
  const [theme, setTheme] = useState<Theme>(Theme.Dark);

  const onChangeTheme = (value: Theme) => {
    setTheme(value);
  };
 
  return (
    <Provider store={store}> 
    <ThemeModeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <div className="App">
      <Router />
      </div>
    </ThemeModeProvider>
    </Provider>

  );
}

export default App;
