import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const history = useHistory();
  const logoImageLink = "https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png";
  const redirectOnSubmit = {
    pathname: "/search",
    search: `label=Search Results&query=${searchInput}'`,
  };

  return (
    <header className="header">
      <Link to="/">
        <img src={logoImageLink} alt="netflix-font" border="0" />
      </Link>
      <div id="navigation" className="navigation">
        <nav>
          <ul>
            <li>
              <Link to="/watch-list">Watch List</Link>
            </li>
          </ul>
        </nav>
      </div>
      <form
        id="search"
        className="search"
        onSubmit={async (event) => {
          event.preventDefault();
          history.push(redirectOnSubmit);
          setSearchInput("");
        }}
      >
        <input type="search" placeholder="Search for a title..." value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
        <div className="searchResults"></div>
      </form>
    </header>
  );
};

export default Header;
