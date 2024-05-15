import { useState, useEffect } from "react";

export function bitcoinData(defaultCurrency = "USD") {
  const [currency, setCurrency] = useState(defaultCurrency);
  const [bitcoinAmmount, setBitcoinAmmount] = useState("");

  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`;

    let ignore = false;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          setBitcoinAmmount(json.bitcoin[currency.toLowerCase()]);
        }
      });

    return () => {
      ignore = true;
    };
  }, [currency]);

  return { bitcoinAmmount, currency, setCurrency };
}
