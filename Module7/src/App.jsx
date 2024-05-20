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
  PostListReducer,
  ReducerCounter,
  RefCounter,
  SubscribeForm,
  VideoPlayer,
} from "./Components";
import { UserProvider } from "./context/UserContext";
import MyThemeProvider from "./context/ThemeContext";
import { EmojiProvider } from "./context/EmojiContext";
import Emoji from "./Components/Emoji";

// Modify App.jsx to include the UserProvider component
function App() {
  return (
    <>
      <UserProvider>
        <MyThemeProvider>
          <EmojiProvider>
            {/* provider component is at top level */}
            <ClockDisplay /> {/* so all children can use context data */}
            {/* <MoviesList /> even if they have children of their own */}
            <ActivityFinder />
            <PostListReducer />
            {/* logging in here can now set up current user everywhere */}
            <LoginForm />
            <Emoji />
            <BitcoinRates></BitcoinRates>
          </EmojiProvider>
        </MyThemeProvider>
      </UserProvider>
    </>
  );
}

export default App;
