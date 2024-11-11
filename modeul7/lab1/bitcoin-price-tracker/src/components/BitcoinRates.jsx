import { useState } from "react";
import { useBitcoinPrice } from "../hooks/usebitcoinPrice";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const { price, loading, error } = useBitcoinPrice(currency);

  const options = currencies.map(curr => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select
          value={currency}
          onChange={e => setCurrency(e.target.value)}
        >
          {options}
        </select>
      </label>
      <div>
        <strong>Bitcoin Price:</strong>{' '}
        {loading ? 'Loading...' : error ? error : `${price} ${currency}`}
      </div>
    </div>
  );
}

export default BitcoinRates;