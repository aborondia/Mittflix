const Show = ({ show, inWatchList, handleClick, handleToggle }) => {
  const image = show.poster_path;
  const rating = show.vote_average;
  const saved = inWatchList(show);

  return (
    <div className="movie" onClick={(event) => handleClick(event, show)}>
      <img
        src={image ? `https://image.tmdb.org/t/p/w500${image}` : "/image-not-available.jpg"}
        alt={`${show.original_name} poster`}
      />
      <div className="overlay">
        <div className="title">{show.original_name}</div>
        <div className="rating">{rating !== 0 ? `${rating}/10` : "No Rating Available"}</div>
        <div className="plot">{show.overview}</div>
      </div>
      <div data-toggled={saved} className="listToggle toggle" onClick={() => handleToggle(show)}>
        <div className='toggle'>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    </div>
  );
};

export default Show;
