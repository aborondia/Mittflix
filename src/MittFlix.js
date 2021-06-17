import './App.css';
import './reset.css';
import { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import Main from './components/Main';
import SearchResults from './components/SearchResults';
import WatchList from './components/WatchList';
import Header from './components/Header';
import Details from './components/Details';
import { getData } from './services/apiHandler';

function App() {

	const [popularShows, setPopularShows] = useState([])
	const [searchResults, setSearchResults] = useState([])
	const [selectedMovieDetails, setSelectedMovieDetails] = useState({});
	const [watchList, setWatchList] = useState([])
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

	const checkWatchList = (show) => {
		return watchList.some(showInWatchList => showInWatchList.id === show.id)
	}

	const toggleWatchedList = (show) => {
		const showInWatchList = watchList.find(watchListShow => watchListShow?.id === show.id);
		const newWatchList = [...watchList];

		if (showInWatchList) {
			setWatchList(watchList.filter(watchListShow => watchListShow?.id !== show.id))
		}

		if (!showInWatchList) {
			newWatchList.push(show);
			setWatchList(newWatchList);
		}

	}

	const getShowDetails = (show) => {
		setSelectedMovieDetails(show);
	}

	const getSearchResults = async (event, searchInput) => {
		event.preventDefault();
		const URL = searchURL.get(searchInput);
		await getData(URL)
			.then(data => setSearchResults({ label: 'Search Results', showList: data.results }))
			.catch(error => console.log(error))
	}

	const getPopularShows = async () => {
		const dataPromises = [];
		const showLists = [];

		for (let provider of providers) {
			await getData(popularShowsURL.get(provider.id))
				.then((data) => {
					const promise = data;
					showLists.push({ label: provider.label, showList: promise });
					dataPromises.push(promise);
				})
				.catch(error => console.log(error));
		}

		await Promise.all(dataPromises)
			.then(() => setPopularShows(showLists))
	}

	useEffect(() => {
		localStorage.setItem('watchList', JSON.stringify(watchList))
	}, [watchList])

	useEffect(() => {
		getPopularShows();
			setWatchList(JSON.parse(localStorage.watchList));
	}, [])

	return (
		<>
			<Header
				handleSubmit={getSearchResults}
			/>
			<Switch>
				<Route exact path='/'>
					<Main showsToDisplay={popularShows}
						inWatchList={checkWatchList}
						handleClick={getShowDetails}
						handleToggle={toggleWatchedList}
					/>
				</Route>

				<Route exact path='/search'>
					<SearchResults
						label={searchResults.label}
						shows={searchResults.showList}
						inWatchList={checkWatchList}
						handleClick={getShowDetails}
						handleToggle={toggleWatchedList}
					/>
				</Route>

				<Route exact path='/watch-list'>
					<WatchList
						watchList={watchList}
						inWatchList={checkWatchList}
						handleClick={getShowDetails}
						handleToggle={toggleWatchedList}
					/>
				</Route>

				<Route path='/details'>
					<Details show={selectedMovieDetails} />
				</Route>

			</Switch>
		</>
	);
}

export default App;
