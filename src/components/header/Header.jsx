import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import "./header.scss";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/contact" className="option">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
