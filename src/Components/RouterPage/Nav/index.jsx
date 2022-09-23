import { Link } from "react-router-dom";
import { Autocomplete } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import "./style.css";

const Nav = () => {
  return (
    <div className="navigation-container">
      <div className="navigation-logo">
        <a href="/">NEWS</a>
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
        <Autocomplete
          placeholder="Search"
          icon={<IconSearch size={16} stroke={2} />}
          data={[""]}
        />
      </div>
    </div>
  );
};

export default Nav;
