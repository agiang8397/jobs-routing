import React, { createContext, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import SearchAppBar from "./components/SearchAppBar";
import HomePage from "./pages/HomePage";
import DetailPages from "./pages/DetailPages";
import RequireAuth from "./auth/RequireAuth";

import Login from "./pages/Login";
import LoginModal from "./components/LoginModal";

export const ModeContext = createContext();

function App() {
  const location = useLocation();
  const state = location.state;
  console.log(state);

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
        <Routes>
          <Route path="/" element={<SearchAppBar />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<Login />} />
            <Route
              path="job/:id"
              element={
                <RequireAuth>
                  <DetailPages />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </ThemeProvider>
    </ModeContext.Provider>
  );
}

export default App;
