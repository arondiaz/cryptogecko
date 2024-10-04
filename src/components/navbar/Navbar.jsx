import { CIcon } from "@coreui/icons-react";
import { cibRiseup, cilArrowRight } from "@coreui/icons";
import "./navbar.css";
import { useContext } from "react";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (e) => {
    if (e.target.value === "usd") {
      setCurrency({
        name: "usd",
        symbol: "$",
      });
    } else if (e.target.value === "eur") {
      setCurrency({
        name: "eur",
        symbol: "€",
      });
    } else {
      setCurrency({
        name: "ars",
        symbol: "$",
      });
    }
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
        <CIcon icon={cibRiseup} size="xl" className="logo" />
      </Link>
      <ul className="navbar-ul">
        <Link to={"/"}>
          <li>Home</li>{" "}
        </Link>
        <li>Features</li>
        <Link to={"/exchanges"}>
          <li>Exchanges</li>
        </Link>

        <li>Blog</li>
      </ul>

      <div className="navbar-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="ars">ARS</option>
        </select>

        <button className="navbar-btn">
          Sign Up <CIcon icon={cilArrowRight} size="sm" className="reg-icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
