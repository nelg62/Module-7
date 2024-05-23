import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  ActivityFinder,
  BitcoinRates,
  Clock,
  ClockDisplay,
  LoginForm,
  NavBar,
  PostListReducer,
  ReducerCounter,
  RefCounter,
  SubscribeForm,
  VideoPlayer,
  FooterPage,
  ResponsiveAppBar,
  ProtectedRoute,
} from "./Components";
import { UserProvider } from "./context/UserContext";
import MyThemeProvider from "./context/ThemeContext";
import { EmojiProvider } from "./context/EmojiContext";
import Emoji from "./Components/Emoji";
import AppRoutes from "../src/routes/AppRoutes";
import Exercise4Routes from "./routes/Exercise4Routes";
import Exercise4NavBar from "./Components/Exercise4Navbar";
import { ThemeProvider } from "@mui/material/styles";
import { tealTheme } from "./themes/tealTheme";
import Exercise5Routes from "./routes/Exercise5Routes";
import { Exersise5CreateTheme } from "./themes/Exercise5createTheme";

// Modify App.jsx to include the UserProvider component
function App() {
  return (
    <UserProvider>
      {/* <MyThemeProvider> */}
      <ThemeProvider theme={Exersise5CreateTheme}>
        <EmojiProvider>
          {/* Exercise 4 V */}
          {/* <Exercise4NavBar />
          <Exercise4Routes /> */}
          {/* Exercise 4 ^ */}

          {/* Exersise 5 V */}

          <ResponsiveAppBar></ResponsiveAppBar>
          <Exercise5Routes></Exercise5Routes>

          {/* Exercise 5 ^ */}

          {/* <NavBar></NavBar>
          <AppRoutes />
          <FooterPage /> */}
        </EmojiProvider>
      </ThemeProvider>
      {/* </MyThemeProvider> */}
    </UserProvider>
  );
}

export default App;
