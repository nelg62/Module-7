import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  ActivityFinder,
  BitcoinRates,
  Clock,
  ClockDisplay,
} from "./Components";

function App() {
  return (
    <>
      {/* <Clock></Clock>
      <ClockDisplay></ClockDisplay> */}
      <ActivityFinder></ActivityFinder>
      <BitcoinRates></BitcoinRates>
    </>
  );
}

export default App;
