const Show = ({ show }) => {
    return (
        <div className="movie">
            <a href="/details/60735"
            ><img src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`} alt={`${show.orignal_name} poster`}  />
                <div className="overlay">
                    <div className="title">{show.orignial_name}</div>
                    <div className="rating">{show.vote_average}/10</div>
                    <div className="plot">{show.overview}</div>
                </div></a
            >
            <div data-toggled="false" className="listToggle">
                <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
            </div>
        </div>);
}

export default Show;