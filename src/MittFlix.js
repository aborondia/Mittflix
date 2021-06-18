import "./App.css";
import "./reset.css";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";
import Details from "./components/Details";
import Search from "./components/Search";
import { getPopularShowsData } from "./services/apiHandler";

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
    const showInWatchList = watchList.find((watchListShow) => watchListShow?.id === show.id);
    const newWatchList = [...watchList];

    if (showInWatchList) {
      setWatchList(watchList.filter((watchListShow) => watchListShow?.id !== show.id));
    }

    if (!showInWatchList) {
      newWatchList.push(show);
      setWatchList(newWatchList);
    }
  };

  const getShowDetails = (event, show) => {
    if (event.target.classList.contains("fa")) {
      return;
    }
    history.push({
      pathname: "/details",
      search: `id=${show.id}`,
    });
  };

  const getPopularShows = async () => {
    const dataPromises = [];
    const showLists = [];

    for (let provider of providers) {
      await getPopularShowsData(provider.id)
        .then((data) => {
          const promise = data;
          showLists.push({ label: provider.label, showList: promise });
          dataPromises.push(promise);
        })
        .catch((error) => console.log(error));
    }

    await Promise.all(dataPromises).then(() => setPopularShows(showLists));
  };

  useState(() => {
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
        <Route exact path="/">
          <Main showsToDisplay={popularShows} inWatchList={checkWatchList} handleClick={getShowDetails} handleToggle={toggleWatchedList} />
        </Route>

        <Route exact path="/search">
          <Search inWatchList={checkWatchList} handleClick={getShowDetails} handleToggle={toggleWatchedList} />
        </Route>

        <Route exact path="/watch-list">
          <Main
            showsToDisplay={[{ label: "Watch List", showList: watchList }]}
            inWatchList={checkWatchList}
            handleClick={getShowDetails}
            handleToggle={toggleWatchedList}
          />
        </Route>

        <Route exact path="/details">
          <Details inWatchList={checkWatchList} handleToggle={toggleWatchedList} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
