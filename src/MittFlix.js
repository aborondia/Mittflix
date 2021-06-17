import './App.css';
import './reset.css';
import { useState } from 'react';
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Main from './components/Main';
import SearchResults from './components/SearchResults';
import WatchList from './components/WatchList';
import TitleList from './components/TitleList';
import Header from './components/Header';
import Details from './components/Details';
import { getData } from './services/apiHandler';

function App() {

	const [pageRedirect, setPageRedirect] = useState('');
	const [popularShows, setPopularShows] = useState([])
	const [searchResults, setSearchResults] = useState([])
	const [watchList, setwatchList] = useState([])
	const apiKey = '45db535623e9d1a035b7e71efd956de0';
	const providers = [
		{ label: 'Netflix', id: 8 },
		{ label: 'Crave', id: 230 },
		{ label: 'Disney', id: 337 },
		{ label: 'Apple', id: 350 }
	];
	const popularShowsURL = {
		get: (id) => {
			return `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-CA&sort_by=popularity.desc&page=1&with_watch_providers=${id}&watch_region=CA`;
		}
	};

	const searchURL = {
		get: (searchInput) => {
			return `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-CA&page=1&include_adult=false&query=${searchInput}`;
		}
	};

	const getSearchResults = async (event, searchInput) => {
		event.preventDefault();
		const URL = searchURL.get(searchInput);
		await getData(URL)
			.then(data => setSearchResults({ label: 'Search Results', showList: data.results }))
			.then(() => setPageRedirect('search'))
			.catch(error => console.log(error))
	}

	const getPopularShows = async () => {
		const dataPromises = [];
		const showLists = [];

		for (let provider of providers) {
			const shows = await getData(popularShowsURL.get(provider.id))
				.then((data) => {
					const promise = data;
					showLists.push({ label: provider.label, showList: promise });
					dataPromises.push(promise);
				})
				.catch(error => console.log(error));
		}

		await Promise.all(dataPromises)
			.then(() => setPopularShows(showLists))
			.then(() => setPageRedirect(''))
	}

	useState(() => {
		getPopularShows()
	}, [])

	return (
		<>
			{/* <Redirect to={`/${pageRedirect}`} /> */}
			<Header
				handleSubmit={getSearchResults}
			/>
			<Switch>
				<Route exact path='/'>
					<Main showsToDisplay={popularShows} />
				</Route>

				<Route exact path='/search'>
					<SearchResults
						label={searchResults.label}
						shows={searchResults.showList} />
				</Route>

				<Route exact path='/watch-list'>
					<WatchList />
				</Route>

				<Route exact path='/dunno-yet'>
					<Details />
				</Route>

			</Switch>
		</>
	);
}

export default App;
