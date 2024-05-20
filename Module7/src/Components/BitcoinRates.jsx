import { useState, useEffect } from "react";
import { bitcoinData } from "../hooks/BitcoinHook";
import { useEmoji } from "../context/EmojiContext";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];
function BitcoinRates() {
  const { bitcoinAmmount, currency, setCurrency } = bitcoinData(currencies[0]);
  const { mood } = useEmoji();

  // fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  // console.log(bitcoinAmmount);
  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      current mood from Emoji component: {mood}
      <p>
        {currency} {bitcoinAmmount}
      </p>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
    </div>
  );
}

export default BitcoinRates;
