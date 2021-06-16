const SearchResults = () => {
    return (
        <div className="titleList">
            <div className="title">
                <h1>Results</h1>
                <div className="titles-wrapper">
                    <div className="movie">
                        <a href="/details/16395"
                        ><img src="https://image.tmdb.org/t/p/w500/m5akdtbWznF8KpOewKyKw0C36s1.jpg" alt="Movie poster" />
                            <div className="overlay">
                                <div className="title">MasterChef Australia</div>
                                <div className="rating">7.2/10</div>
                                <div className="plot">
                                    MasterChef Australia is a Logie Award-winning Australian competitive cooking game show based on the original British MasterChef. It is
                                    produced by Shine Australia and screens on Network Ten. Restaurateur and chef Gary Mehigan, chef George Calombaris and food critic Matt
                                    Preston serve as the show's main judges. Journalist Sarah Wilson hosted the first series, however her role was dropped at the end of the
                                    series.
                                </div>
                            </div>
                        </a>
                        <div data-toggled="false" className="listToggle">
                            <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default SearchResults;