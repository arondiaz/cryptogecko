import { useContext, useEffect, useState } from "react";
import "./coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";

const Coin = () => {
  const { currency } = useContext(CoinContext);
  const [coin, setCoin] = useState();

  const { coinID } = useParams();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-s3x5gU2M67GbAJTf5vEZWha3",
      },
    };

    const getData = () => {
      fetch(`https://api.coingecko.com/api/v3/coins/${coinID}`, options)
        .then((response) => response.json())
        .then((response) => setCoin(response))
        .catch((err) => console.error(err));
    };

    getData();
  }, [coinID]);

  console.log(coin);

  return (
    <div>
      {coin ? (
        <div className="coin">
          <div className="coin-name">
            <img src={coin.image.large} alt="" />
            <p>
              {coin.name} ({coin.symbol.toUpperCase()}){" "}
            </p>
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
