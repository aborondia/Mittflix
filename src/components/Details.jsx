const Details = ({ show, inWatchList, handleToggle }) => {
  return (
    <div className="show-details">
      <img src={`https://image.tmdb.org/t/p/original/${show.backdrop_path}`} alt={`${show.original_name} backdrop`} />
      <div className="show-details-inner">
        <h1>{show.original_name}</h1>
        <div className="description">{show.overview}</div>
        <button className="add-to-watchlist" onClick={() => handleToggle(show)}>{inWatchList(show) ? '- Remove from watch list' : '+ Add to watch list'}</button>
      </div>
    </div>);
}

export default Details;