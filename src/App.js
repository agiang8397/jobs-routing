import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import SearchAppBar from "./components/SearchAppBar";
import HomePage from "./pages/HomePage";
import DetailPages from "./pages/DetailPages";

export const ModeContext = createContext();

function App() {
  const [mode, setMode] = useState("light");
  const customTheme = createTheme({
    palette: {
      mode,
    },
  });
  const handleChangeMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <ModeContext.Provider value={handleChangeMode}>
      <ThemeProvider theme={customTheme}>
        <SearchAppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/job/:id" element={<DetailPages />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </ThemeProvider>
    </ModeContext.Provider>
  );
}

export default App;
