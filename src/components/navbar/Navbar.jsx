import { CIcon } from "@coreui/icons-react";
import { cibRiseup, cilArrowRight } from "@coreui/icons";
import "./navbar.css";
import { useContext } from "react";
import { CoinContext } from "../../context/CoinContext";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (e) => {
    if (e.target.value === "usd") {
      setCurrency({
        name: "usd",
        symbol: "$",
      });
    } else {
      setCurrency({
        name: "eur",
        symbol: "€",
      });
    }
  };

  return (
    <div className="navbar">
      <CIcon icon={cibRiseup} size="xl" className="logo" />

      <ul className="navbar-ul">
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>

      <div className="navbar-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
        </select>

        <button className="navbar-btn">
          Sign Up <CIcon icon={cilArrowRight} size="sm" className="reg-icon" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
