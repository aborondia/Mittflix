import { getShowDetailsData } from '../services/apiHandler';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Details = ({ inWatchList, handleToggle }) => {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get('id');
  const [details, setDetails] = useState({});

  const getDetails = async () => {
    getShowDetailsData(id)
      .then((data) => setDetails(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (id) {
      getDetails();
    }
  }, [id]);

  if (!details.id) {
    return <></>;
  }

  return (
    <div id='something' className='show-details'>
      <img
        src={details.backdrop_path ? `https://image.tmdb.org/t/p/original/${details.backdrop_path}` : '/empty.png'}
        alt={details.original_name}
      />
      <div className='show-details-inner'>
        <h1>{details.original_name}</h1>
        <div className='description'>{details.overview}</div>
        <button className='add-to-watchlist' onClick={() => handleToggle(details)}>
          {inWatchList(details) ? '- Remove from watch list' : '+ Add to watch list'}
        </button>
      </div>
    </div>
  );
};

export default Details;
