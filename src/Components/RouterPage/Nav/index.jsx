import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navigation-container">
      <Link className="navigation-item" to="/">
        Home
      </Link>
      <Link className="navigation-item" to="/other">
        Other
      </Link>
    </div>
  );
};

export default Nav;
