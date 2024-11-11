
import { useReducer, useEffect } from "react";

// Define action types
const ACTIONS = {
  FETCH_INIT: 'FETCH_INIT',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_FAILURE: 'FETCH_FAILURE',
};

// Reducer function
function bitcoinPriceReducer(state, action) {
  switch (action.type) {
    case ACTIONS.FETCH_INIT:
      return { ...state, loading: true, error: null };
    case ACTIONS.FETCH_SUCCESS:
      return { ...state, loading: false, price: action.payload };
    case ACTIONS.FETCH_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function useBitcoinPrice(currency) {
  const [state, dispatch] = useReducer(bitcoinPriceReducer, {
    price: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchBitcoinPrice = async () => {
      dispatch({ type: ACTIONS.FETCH_INIT });
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`,
          { signal }
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: data.bitcoin[currency.toLowerCase()] });
      } catch (err) {
        if (err.name !== 'AbortError') {
          dispatch({ type: ACTIONS.FETCH_FAILURE, payload: err.message });
        }
      }
    };

    fetchBitcoinPrice();

    return () => {
      controller.abort();
    };
  }, [currency]);

  return { price: state.price, loading: state.loading, error: state.error };
}