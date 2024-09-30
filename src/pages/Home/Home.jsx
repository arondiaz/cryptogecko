import { useContext, useState, useEffect } from "react";
import "./home.css";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  const handleInput = (e) => {
    setInput(e.target.value);

    if (e.target.value === "") {
      setDisplayCoin(allCoin);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const coins = await allCoin.filter((item) => {
      return (
        item.name.toLowerCase().includes(input.toLocaleLowerCase()) ||
        item.symbol.toLowerCase().includes(input.toLocaleLowerCase())
      );
    });

    setDisplayCoin(coins);
  };

  return (
    <div className="home">
      <div className="hero">
        <h1 className="title">
          Largest <br />
          Crypto Marketplace
        </h1>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          consectetur ipsum natus voluptates quaerat velit sit ipsam illum
          aliquam.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleInput}
            value={input}
            type="text"
            placeholder="Search crypto..."
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p className="supply">Supply</p>
          <p className="variation">Variation</p>
          <p className="marketcap">Market Cap</p>
        </div>

        {displayCoin.slice(0, 10).map((coin) => (
          <Link to={`coin/${coin.id}`} key={coin.id} className="table-layout">
            <p>{coin.market_cap_rank}</p>
            <div className="container-img">
              <img src={coin.image} alt="" />
              <p>
                <strong> {coin.symbol.toUpperCase()} </strong>
                {coin.name}{" "}
              </p>
            </div>

            <p>
              {currency.symbol}
              {coin.current_price.toLocaleString("en")}
            </p>

            <p className="supply">
              {coin.circulating_supply.toLocaleString("en")}
            </p>
            <p
              className={`variation ${
                coin.price_change_percentage_24h > 0 ? "green" : "red"
              } `}
            >
              {Math.floor(coin.price_change_percentage_24h * 100) / 100}
            </p>
            <p className="marketcap">
              {currency.symbol}
              {coin.market_cap.toLocaleString("en")}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
