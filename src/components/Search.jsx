import TitleList from './TitleList';
import { useLocation } from 'react-router-dom';
import { getSearchData } from '../services/apiHandler';
import { useState, useEffect } from 'react';

const Search = ({ inWatchList, handleClick, handleToggle }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  const [searchResults, setSearchResults] = useState([]);
  const [listTitle, setListTitle] = useState('Please enter a search');

  const validQuery = (cleanQuery) => {
    if (!cleanQuery || cleanQuery.length === 0) {
      return false;
    }

    return true;
  };

  const updateTitleList = (cleanQuery) => {
    if (query === null) {
      setListTitle('Please enter a search');
      return;
    }

    if (cleanQuery.length === 0) {
      setListTitle('Please enter a valid search!');
      setSearchResults([]);
      return;
    }

    setListTitle(`Search Results For "${query}"`);
  };

  const getSearchResults = async () => {
    const cleanQuery = query?.replace(/\s+/g, '');

    updateTitleList(cleanQuery);
    if (validQuery(cleanQuery)) {
      await getSearchData(query)
        .then((data) => setSearchResults(data.results))
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    getSearchResults();
  }, [query]);

  return (
    <>
      <TitleList
        label={listTitle}
        shows={searchResults}
        inWatchList={inWatchList}
        handleClick={handleClick}
        handleToggle={handleToggle}
      />
    </>
  );
};

export default Search;
