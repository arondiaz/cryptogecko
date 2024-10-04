import { useContext, useEffect, useState } from "react";
import { ExchangeContext } from "../../context/ExchangeContext";
import { Link } from "react-router-dom";
import "./exchanges.css";

const Exchange = () => {
  const { allExchange } = useContext(ExchangeContext);

  const [displayExchange, setDisplayExchange] = useState([]);

  useEffect(() => {
    setDisplayExchange(allExchange);
  }, [allExchange]);

  console.log(displayExchange);
  return (
    <div className="home-exc">
      <div className="hero-exc">
        <h1 className="title-exc">
          Biggest <br />
          Crypto Exchanges
        </h1>
        <p className="paragraph-exc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          consectetur ipsum natus voluptates quaerat velit sit ipsam illum
          aliquam.
        </p>
        <form>
          <input type="text" placeholder="Search exchange..." />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="exchange-table">
        <div className="table-exchange">
          <p>#</p>
          <p>Exchange</p>
          <p className="year">Year</p>
          <p className="website-col">Website</p>
          <p className="volume">Volume 24hs </p>
        </div>

        {displayExchange.slice(0, 10).map((exchange, index) => (
          <Link to={"/"} key={exchange.id} className="table-exchange">
            <p>{index}</p>
            <div className="container-exc">
              <img src={exchange.image} alt="" />

              <p>{exchange.name}</p>
            </div>

            <p className="year">{exchange.year_established}</p>

            <Link to={exchange.url} className="website">
              <p>{exchange.name.toLowerCase()}.com</p>
            </Link>

            <p className="volume">{exchange.trade_volume_24h_btc.toLocaleString("en")}btc</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Exchange;
