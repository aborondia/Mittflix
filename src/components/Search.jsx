import { getSearchData } from '../services/apiHandler';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TitleList from './TitleList';

const Search = ({ inWatchList, handleClick, handleToggle }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  const [searchResults, setSearchResults] = useState([]);
  const [listTitle, setListTitle] = useState('Please enter a search');

  const validQuery = () => {
    const cleanQuery = query?.replace(/\s+/g, '');

    if (cleanQuery?.length === 0) {
      setSearchResults([]);
      setListTitle('Please enter a valid search!');
      return false;
    }

    if (!cleanQuery) {
      setListTitle('Please enter a search');
      return false;
    }

    setListTitle(`Search Results For "${query}"`);
    return true;
  };

  const getSearchResults = async () => {
    if (validQuery()) {
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
