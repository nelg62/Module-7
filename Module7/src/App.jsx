import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  ActivityFinder,
  BitcoinRates,
  Clock,
  ClockDisplay,
  RefCounter,
  VideoPlayer,
} from "./Components";

function App() {
  return (
    <>
      {/* <Clock></Clock>
      <ClockDisplay></ClockDisplay> */}
      {/* <ActivityFinder></ActivityFinder>
      <BitcoinRates></BitcoinRates> */}
      <RefCounter></RefCounter>
      <VideoPlayer></VideoPlayer>
    </>
  );
}

export default App;
