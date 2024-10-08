/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./oneexchange.css";
import listCrypto from "../../data/listCrypto.js";

const OneExchange = () => {
  const { exchangeID } = useParams();
  const [displayOneExchange, setDisplayOneExchange] = useState([]);
  const [displayTickers, setDisplayTickers] = useState([]);
  const [select, setSelect] = useState("bitcoin");

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": apiKey,
      },
    };

    fetch(`https://api.coingecko.com/api/v3/exchanges/${exchangeID}`, options)
      .then((response) => response.json())
      .then((response) => setDisplayOneExchange(response))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": apiKey,
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/exchanges/${exchangeID}/tickers?coin_ids=${select}&quote=usd`,
      options
    )
      .then((response) => response.json())
      .then((response) => setDisplayTickers(response))
      .catch((err) => console.error(err));
  }, [select]);

  const format = displayTickers.tickers;

  const handleChange = (e) => {
    const coinSelected = e.target.value;
    setSelect(coinSelected);
  };

  return (
    <div>
      {displayOneExchange.name ? (
        <div className="container-one">
          <div className="main-info">
            <img
              src={displayOneExchange.image}
              alt="exc"
              className="img-exchange"
            />
            <h2>{displayOneExchange.name}</h2>
          </div>

          <div className="info-container">
            <ul className="info-ul">
              <li>
                {" "}
                <span>Country: </span> {displayOneExchange.country}
              </li>

              <li>
                Website:{" "}
                <Link to={displayOneExchange.url}>
                  {displayOneExchange.name}{" "}
                </Link>
              </li>
            </ul>
          </div>
          <div className="select-container">
            <select onChange={handleChange} className="select-crypto">
              {Object.keys(listCrypto).map((item) => (
                <option value={listCrypto[item]} key={item}>
                  {listCrypto[item]}{" "}
                </option>
              ))}
            </select>
          </div>

          <div className="data-crypto">
            {format != undefined &&
              format.slice(0, 2).map((item, i) => (
                <section key={i} className="data-format">
                  <h3>{item.coin_id.toUpperCase()}</h3>
                  <h4>{item.target}</h4>
                  <p>
                    Volume {item.converted_volume.btc.toLocaleString("en")} BTC
                  </p>
                  <p>
                    Volume {item.converted_volume.usd.toLocaleString("en")} USD
                  </p>
                  <p>
                    Trade url:{" "}
                    <Link to={item.trade_url}> {item.trade_url}</Link>
                  </p>
                </section>
              ))}
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

export default OneExchange;
