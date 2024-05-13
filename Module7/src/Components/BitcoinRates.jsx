import { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];
function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [bitcoinAmmount, setBitcoinAmmount] = useState("");

  useEffect(() => {
    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
    )
      .then((response) => response.json())
      .then((json) => {
        setBitcoinAmmount(json.bitcoin[currency.toLowerCase()]);
      });
  }, [currency]);

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
