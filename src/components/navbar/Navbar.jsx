import { CIcon } from "@coreui/icons-react";
import { cibRiseup, cilArrowRight } from "@coreui/icons";
import "./navbar.css";

const Navbar = () => {
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
        <select>
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
