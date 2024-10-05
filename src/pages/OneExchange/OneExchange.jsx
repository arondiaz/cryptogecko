import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./oneexchange.css";

const OneExchange = () => {
  const { exchangeID } = useParams();
  const [displayOneExchange, setDisplayOneExchange] = useState([]);

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

  return (
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

          <Link to={displayOneExchange.url}>
            <li>Website {displayOneExchange.name} </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default OneExchange;
