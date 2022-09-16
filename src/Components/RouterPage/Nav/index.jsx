import { Link } from "react-router-dom";
import { Autocomplete } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
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
        <Autocomplete
          placeholder="Search"
          icon={<IconSearch size={16} stroke={1.5} />}
          data={[""]}
        />
      </div>
    </div>
  );
};

export default Nav;
