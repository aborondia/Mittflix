import './App.css';
import './reset.css';
import { useState, setState } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Main from './components/Main';
import Search from './components/Search';
import WatchList from './components/WatchList';
import Header from './components/Header';
import Details from './components/Details';
import { getData } from './services/apiHandler';

function App() {
  const [popularShows, setPopularShows] = useState([])
  const apiKey = '45db535623e9d1a035b7e71efd956de0';
  const providers = [
    { name: 'Netflix', id: 8 },
    { name: 'Crave', id: 230 },
    { name: 'Disney', id: 337 },
    { name: 'Apple', id: 350 }
  ];
  const popularShowsURL = {
    get: (id) => {
      return `https://api.themoviedb.org/3/discover/tv?api_key=45db535623e9d1a035b7e71efd956de0&language=en-CA&sort_by=popularity.desc&page=1&with_watch_providers=${id}&watch_region=CA`
    }
  };

  const getPopularShows = async () => {
    const showLists = [];
    for (let provider of providers) {
      const shows = await getData(popularShowsURL.get(provider.id));
      showLists.push({ providerName: provider.name, showList: shows.results })
    }

    return showLists;
  }

  useState(() => {
    getPopularShows()
      .then((data) => setPopularShows(data))
  }, [])

  return (
    <>

      <Header />
      <Switch>
        <Route exact path='/'>
          <Main showsByProvider={popularShows} />
        </Route>

        <Route exact path='/search'>
          <Search />
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
