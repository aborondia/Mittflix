import { getData } from "../services/apiHandler";
import {  useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Details = ({ inWatchList, handleToggle }) => {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");
  const [details, setDetails] = useState({});

  const apiKey = "45db535623e9d1a035b7e71efd956de0";

  const searchURL = {
    get: (id) => {
      return `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`;
    },
  };

  const getDetails = async () => {
    getData(searchURL.get(id))
      .then((data) => setDetails(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getDetails();
  }, []);

if(!details.id){
  return <></>
}

  return (
    <div className="show-details">
      <img
        src={details.backdrop_path ? `https://image.tmdb.org/t/p/original/${details.backdrop_path}` : null}
        alt={`${details.original_name} IMAGE NOT AVAILABLE`}
      />
      <div className="show-details-inner">
        <h1>{details.original_name}</h1>
        <div className="description">{details.overview}</div>
        <button className="add-to-watchlist" onClick={() => handleToggle(details)}>
          {inWatchList(details) ? "- Remove from watch list" : "+ Add to watch list"}
        </button>
      </div>
    </div>
  );
};

export default Details;
