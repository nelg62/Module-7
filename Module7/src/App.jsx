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
} from "./Components";
import { UserProvider } from "./context/UserContext";
import MyThemeProvider from "./context/ThemeContext";
import { EmojiProvider } from "./context/EmojiContext";
import Emoji from "./Components/Emoji";
import AppRoutes from "../src/routes/AppRoutes";
import Exercise4Routes from "./routes/Exercise4Routes";
import Exercise4NavBar from "./Components/Exercise4Navbar";

// Modify App.jsx to include the UserProvider component
function App() {
  return (
    <UserProvider>
      <MyThemeProvider>
        <EmojiProvider>
          {/* Exercise 4 V */}
          <Exercise4NavBar />
          <Exercise4Routes />
          {/* Exercise 4 ^ */}

          {/* <NavBar></NavBar>
        <AppRoutes />
        <FooterPage /> */}
        </EmojiProvider>
      </MyThemeProvider>
    </UserProvider>
  );
}

export default App;
