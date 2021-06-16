import { useState } from 'react';
import { Link } from "react-router-dom";

const Header = ({ handleSubmit }) => {
	const [searchInput, setSearchInput] = useState('');

	return (
		<header className="header">
			<Link to="/"><img src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png" alt="netflix-font" border="0" /></Link>
			<div id="navigation" className="navigation">
				<nav>
					<ul>
						<li><a href="/my-watch-list">Watch List</a></li>
					</ul>
				</nav>
			</div>
			<form id="search" className="search" onSubmit={(event) => handleSubmit(event, searchInput)}>
				<input type="search" placeholder="Search for a title..." value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
				<div className="searchResults"></div>
			</form>
		</header>
	);
}

export default Header;