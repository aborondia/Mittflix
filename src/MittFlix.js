import "./App.css";
import "./reset.css";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";
import Details from "./components/Details";
import Search from "./components/Search";
import { getPopularShowsData } from "./services/apiHandler";
import WatchList from "./components/WatchList";

function App() {
  const history = useHistory();
  const [popularShows, setPopularShows] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const providers = [
    { label: "Netflix", id: 8 },
    { label: "Crave", id: 230 },
    { label: "Disney", id: 337 },
    { label: "Apple Plus", id: 350 },
  ];

  const checkWatchList = (show) => {
    return watchList.some((showInWatchList) => showInWatchList.id === show.id);
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

  const getShowDetails = (event, show) => {
    if (event.target.classList.contains("toggle")) {
      return;
    }

    history.push({
      pathname: "/details",
      search: `id=${show.id}`,
    });
  };

  const getPopularShows = async () => {
    const promises = [];
    const showLists = [];

    for (let provider of providers) {
      await getPopularShowsData(provider.id)
        .then((promise) => {
          showLists.push({ label: provider.label, showList: promise });
          promises.push(promise);
        })
        .catch((error) => console.log(error));
    }

    Promise.all(promises).then(() => setPopularShows(showLists));
  };

  useEffect(() => {
    getPopularShows();

    if (localStorage.watchList) {
      setWatchList(JSON.parse(localStorage.watchList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(watchList));
  }, [watchList]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Main
            showsToDisplay={popularShows}
            inWatchList={checkWatchList}
            handleClick={getShowDetails}
            handleToggle={toggleWatchedList}
          />
        </Route>

        <Route exact path='/search'>
          <Search
            inWatchList={checkWatchList}
            handleClick={getShowDetails}
            handleToggle={toggleWatchedList}
          />
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
