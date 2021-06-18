import { getData } from '../services/apiHandler';
import { useHistory, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

const Details = ({ show, inWatchList, handleToggle }) => {
  const example = 'https://api.themoviedb.org/3/tv/84958?api_key=45db535623e9d1a035b7e71efd956de0&language=en-US';
  const history = useHistory();
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id');
  const [details, setDetails] = useState({})


  const apiKey = '45db535623e9d1a035b7e71efd956de0';

  const searchURL = {
    get: (id) => {
      return `'https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US'`;
    }
  };

  const getSearchResults = async () => {
    const URL = searchURL.get(id);
    // await getData(URL)
    const response = await fetch('https://api.themoviedb.org/3/tv/84958?api_key=45db535623e9d1a035b7e71efd956de0&language=en-US');
    if (!response.ok) {
      throw new Error('Fetch unsuccessful');
    }

    const data = await response.json()
      .then(data => setDetails(data))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getSearchResults();

	}, [])

  
  return (
    <div className="show-details">
      <img src={`https://image.tmdb.org/t/p/original/${details?.backdrop_path ? details.backdrop_path : ''}`} alt={`${details?.original_name? details.original_name : ''} backdrop`} />
      <div className="show-details-inner">
        <h1>{`${details?.original_name? details.original_name : ''}`}</h1>
        <div className="description">{details?.overview? details.overview : ''}</div>
        <button className="add-to-watchlist" onClick={() => handleToggle(show)}>{inWatchList(show) ? '- Remove from watch list' : '+ Add to watch list'}</button>
      </div>
    </div>);
}

export default Details;