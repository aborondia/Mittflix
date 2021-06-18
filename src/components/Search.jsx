import TitleList from "./TitleList";
import { useLocation } from "react-router-dom";
import { getSearchData } from "../services/apiHandler";
import { useState } from "react";

const Search = ({ inWatchList, handleClick, handleToggle }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const label = new URLSearchParams(location.search).get("label");
  const [searchResults, setSearchResults] = useState([]);

  const getSearchResults = async () => {
    await getSearchData(query)
      .then((data) => setSearchResults(data.results))
      .catch((error) => console.log(error));
  };

  useState(() => {
    getSearchResults();
  }, []);

  return (
    <>
      <TitleList label={label} shows={searchResults} inWatchList={inWatchList} handleClick={handleClick} handleToggle={handleToggle} />
    </>
  );
};

export default Search;
