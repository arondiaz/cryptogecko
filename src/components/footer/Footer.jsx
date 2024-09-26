import { Link } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import { cibGithub, cibLinkedin } from "@coreui/icons";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo-container">
        <Link to={"https://github.com/arondiaz/cryptogecko"} target="_blank">
          <CIcon icon={cibGithub} size="sm" className="logo" />
        </Link>

        <Link to={"https://www.linkedin.com/in/arondiaz/"} target="_blank">
          <CIcon icon={cibLinkedin} size="sm" className="logo" />
        </Link>
      </div>

      <p>Copyright CryptoGecko 2024 - All right reserved.</p>
    </div>
  );
};

export default Footer;
