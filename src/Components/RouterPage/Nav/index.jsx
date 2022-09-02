import { Link } from "react-router-dom";
import "./style.css";
const Nav = () => {
  return (
    <div className="navigation-container">
      <div className="navigation-logo">
        <h1>NEWS</h1>
      </div>
      <div className="navigation-container__links">
        <Link className="navigation-item" to="/">
          Home
        </Link>
        <Link className="navigation-item" to="/other">
          Other
        </Link>
      </div>

      <div className="navigation-search">
        <label htmlFor="search">
          <input type="search" name="" id="" placeholder="Search" />
        </label>
      </div>
    </div>
  );
};

export default Nav;
