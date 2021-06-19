import './App.css';
import './reset.css';
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Details from './components/Details';
import Header from './components/Header';
import Popular from './components/Popular';
import Search from './components/Search';
import WatchList from './components/WatchList';

function App() {
  const history = useHistory();
  const [watchList, setWatchList] = useState([]);

  const checkWatchList = (show) => {
    return watchList.some((showInWatchList) => showInWatchList.id === show.id);
  };

  const getShowDetails = (event, show) => {
    if (event.target.classList.contains('toggle')) {
      return;
    }

    history.push({
      pathname: '/details',
      search: `id=${show.id}`,
    });
  };

  const toggleWatchedList = (show) => {
    const showInWatchList = watchList.find((watchListShow) => watchListShow.id === show.id);
    let newWatchList = [...watchList];

    if (showInWatchList) {
      newWatchList = newWatchList.filter((watchListShow) => watchListShow?.id !== show.id);
    }

    if (!showInWatchList) {
      newWatchList.push(show);
    }

    setWatchList(newWatchList);
  };

  useEffect(() => {
    if (localStorage.watchList) {
      setWatchList(JSON.parse(localStorage.watchList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(watchList));
  }, [watchList]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Popular
            // showsToDisplay={popularShows}
            inWatchList={checkWatchList}
            handleClick={getShowDetails}
            handleToggle={toggleWatchedList}
          />
        </Route>

        <Route exact path='/search'>
          <Search inWatchList={checkWatchList} handleClick={getShowDetails} handleToggle={toggleWatchedList} />
        </Route>

        <Route exact path='/watch-list'>
          <WatchList
            showsToDisplay={watchList}
            inWatchList={checkWatchList}
            handleClick={getShowDetails}
            handleToggle={toggleWatchedList}
          />
        </Route>

        <Route exact path='/details'>
          <Details inWatchList={checkWatchList} handleToggle={toggleWatchedList} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
