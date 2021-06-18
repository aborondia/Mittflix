import TitleList from './TitleList';
import { useHistory, useLocation } from "react-router-dom";
import { getData } from '../services/apiHandler';
import { useState, useEffect } from 'react';



const Search = ({inWatchList, handleClick, handleToggle}) => {
	const history = useHistory();
	const location = useLocation();
	const query = new URLSearchParams(location.search).get('query');
	const label = new URLSearchParams(location.search).get('label');
	const [searchResults, setSearchResults] = useState([])

	const apiKey = '45db535623e9d1a035b7e71efd956de0';

	const searchURL = {
		get: (searchInput) => {
			return `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-CA&page=1&include_adult=false&query=${searchInput}`;
		}
	};

	const getSearchResults = async () => {
		const URL = searchURL.get(query);

		await getData(URL)
			.then(data => setSearchResults(data.results))
			.catch(error => console.log(error))
	}

  useEffect(() => {
    getSearchResults();

	}, [])
	
	return (<>
		<TitleList
			label={label}
			shows={searchResults}
			inWatchList={inWatchList}
			handleClick={handleClick}
			handleToggle={handleToggle}
		/>
	</>);
}

export default Search;