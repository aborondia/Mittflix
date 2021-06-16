import './App.css';
import './reset.css';
import { Switch, Route, Link } from "react-router-dom";
import Main from './components/Main';
import Search from './components/Search';
import WatchList from './components/WatchList';
import Header from './components/Header';
import Details from './components/Details';

function App() {
  const apiKey = '45db535623e9d1a035b7e71efd956de0';
  const workingURL = 'https://api.themoviedb.org/3/discover/tv?api_key=45db535623e9d1a035b7e71efd956de0&language=en-CA&sort_by=popularity.desc&page=1&with_watch_providers=337&watch_region=CA';
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Main />
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
