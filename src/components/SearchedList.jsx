import Show from "./Show";
import { useHistory, useLocation } from "react-router-dom";
import { getData } from '../services/apiHandler';

const SearchedList = async ({ inWatchList, handleClick, handleToggle }) => {
	const history = useHistory();
	const location = useLocation();
	const apiKey = '45db535623e9d1a035b7e71efd956de0';

	const searchURL = {
		get: (searchInput) => {
			return `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-CA&page=1&include_adult=false&query=${searchInput}`;
		}
	};
	const getSearchResults = async () => {
		const query = new URLSearchParams(location.search).get('query');
		const URL = searchURL.get(query);
		let searchResults;

		await getData(URL)
			.then(data => searchResults = data.results)
			.catch(error => console.log(error))

		return searchResults;
	}

	const blah = await getSearchResults();

	return (
		<div className="titleList">
			<div className="title">
				<h1>Search Stuff</h1>
				<div className="titles-wrapper">
					{blah.map((show) => {
						return (<Show
							show={show}
							inWatchList={null}
							handleClick={null}
							handleToggle={null}
							key={show.id}
						/>)
					})}
				</div>
			</div>
		</div>
	);
}

export default SearchedList;