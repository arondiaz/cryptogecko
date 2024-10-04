/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const ExchangeContext = createContext();

const ExchangeContextProvider = (props) => {
  const [allExchange, setAllExchange] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;

  const fetchAllExchange = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": apiKey,
      },
    };

    fetch("https://api.coingecko.com/api/v3/exchanges", options)
      .then((response) => response.json())
      .then((response) => setAllExchange(response))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchAllExchange();
  }, []);

  const contextResult = {
    allExchange,
  };

  return (
    <ExchangeContext.Provider value={contextResult}>
      {props.children}
    </ExchangeContext.Provider>
  );
};

export default ExchangeContextProvider;
