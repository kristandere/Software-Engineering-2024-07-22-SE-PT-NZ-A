import React, { useState, useEffect } from 'react';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    const [bitcoinPrice, setBitcoinPrice] = useState(null);
    const [error, setError] = useState(null);

    const options = currencies.map(curr => (
        <option value={curr} key={curr}>{curr}</option>
    ));

    useEffect(() => {
        let isMounted = true; 

        const fetchBitcoinPrice = async () => {
            setError(null); 
            const fetchUrl = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency.toLowerCase()}`; // Use lowercase for currency
            console.log(`Fetching price for: ${currency}`);
            console.log(`Fetch URL: ${fetchUrl}`);
            
            try {
                const response = await fetch(fetchUrl);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                console.log(data); 

                if (isMounted) {

                    setBitcoinPrice(data.bitcoin[currency.toLowerCase()]);
                }
            } catch (error) {
                if (isMounted) {
                    setError('Error fetching Bitcoin price. Please try again later.');
                }
                console.error('Error fetching Bitcoin price:', error);
            }
        };

        fetchBitcoinPrice();

        return () => {
            isMounted = false; 
        };
    }, [currency]); 

    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>
                Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
            {error && <div style={{ color: 'red' }}>{error}</div>} {/* Display error if it exists */}
            {bitcoinPrice !== null && (
                <div>
                    <h4>Current Price: {bitcoinPrice} {currency}</h4>
                </div>
            )}
        </div>
    );
}

export default BitcoinRates;
