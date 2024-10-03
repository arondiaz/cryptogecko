import { useContext, useEffect, useState } from "react";
import "./coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import CoinChart from "../../components/chart/CoinChart";

const Coin = () => {
  const { currency } = useContext(CoinContext);
  const [coin, setCoin] = useState();
  const [historical, setHistorical] = useState();

  const { coinID } = useParams();

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": apiKey,
      },
    };

    const getData = async () => {
      fetch(`https://api.coingecko.com/api/v3/coins/${coinID}`, options)
        .then((response) => response.json())
        .then((response) => setCoin(response))
        .catch((err) => console.error(err));
    };

    const getHistorical = async () => {
      fetch(
        `https://api.coingecko.com/api/v3/coins/${coinID}/market_chart?vs_currency=${currency.name}&days=10`,
        options
      )
        .then((response) => response.json())
        .then((response) => setHistorical(response))
        .catch((err) => console.error(err));
    };

    getData();
    getHistorical();
  }, [coinID]);

  return (
    <div>
      {coin && historical ? (
        <div className="coin">
          <div className="coin-name">
            <img src={coin.image.large} alt="" />
            <p>
              {coin.name} ({coin.symbol.toUpperCase()}){" "}
            </p>
          </div>
          <div className="coin-chart">
            <CoinChart historical={historical} />
          </div>

          <div className="coin-info">
            <ul>
              <li>Market Rank</li>
              <li>{coin.market_cap_rank}</li>
            </ul>

            <ul>
              <li>Current Price</li>
              <li>
                {currency.symbol}
                {coin.market_data.current_price[currency.name].toLocaleString()}
              </li>
            </ul>
            <ul>
              <li>High 24hs</li>
              <li>
                {currency.symbol}
                {coin.market_data.high_24h[currency.name].toLocaleString()}
              </li>
            </ul>
            <ul>
              <li>Low 24hs</li>
              <li>
                {currency.symbol}
                {coin.market_data.low_24h[currency.name].toLocaleString()}
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="spinner">
          <div className="spin"></div>
        </div>
      )}
    </div>
  );
};

export default Coin;
