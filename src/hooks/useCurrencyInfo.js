import { useEffect } from "react";
import axios from "axios";

function useCurrencyInfo(currency, setCurrency) {
  useEffect(() => {
    axios
      .get(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
      )
      .then((res) => setCurrency(res.data[currency]));
  }, [currency]);
}

export default useCurrencyInfo;
