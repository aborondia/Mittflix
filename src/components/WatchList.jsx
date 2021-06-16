const WatchList = () => {
    return (
        <div className="titleList">
            <div className="title">
                <h1>My Watch List</h1>
                <div className="titles-wrapper">
                    <div className="movie">
                        <a href="/details/1416"
                        ><img src="https://image.tmdb.org/t/p/w500/clnyhPqj1SNgpAdeSS6a6fwE6Bo.jpg" alt="Movie poster" />
                            <div className="overlay">
                                <div className="title">Grey's Anatomy</div>
                                <div className="rating">8.2/10</div>
                                <div className="plot">Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.</div>
                            </div></a
                        >
                        <div data-toggled="true" className="listToggle">
                            <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
                        </div>
                    </div>
                    <div className="movie">
                        <a href="/details/93484"
                        ><img src="https://image.tmdb.org/t/p/w500/9yxep7oJdkj3Pla9TD9gKflRApY.jpg" alt="Movie poster" />
                            <div className="overlay">
                                <div className="title">Jupiter's Legacy</div>
                                <div className="rating">7.4/10</div>
                                <div className="plot">
                                    When the world's first generation of superheroes received their powers in the 1930s become the revered elder guard in the present, their
                                    superpowered children struggle to live up to the legendary feats of their parents.
                                </div>
                            </div></a
                        >
                        <div data-toggled="true" className="listToggle">
                            <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
                        </div>
                    </div>
                    <div className="movie">
                        <a href="/details/63174"
                        ><img src="https://image.tmdb.org/t/p/w500/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg" alt="Movie poster" />
                            <div className="overlay">
                                <div className="title">Lucifer</div>
                                <div className="rating">8.5/10</div>
                                <div className="plot">
                                    Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD
                                    detective Chloe Decker to take down criminals.&nbsp;But the longer he's away from the underworld, the greater the threat that the worst of
                                    humanity could escape.
                                </div>
                            </div></a
                        >
                        <div data-toggled="true" className="listToggle">
                            <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
                        </div>
                    </div>
                    <div className="movie">
                        <a href="/details/86831">
                            <img src="https://image.tmdb.org/t/p/w500/asDqvkE66EegtKJJXIRhBJPxscr.jpg" alt="Movie poster" />
                            <div className="overlay">
                                <div className="title">Love, Death &amp; Robots</div>
                                <div className="rating">8.2/10</div>
                                <div className="plot">
                                    Terrifying creatures, wicked surprises and dark comedy converge in this NSFW anthology of animated stories presented by Tim Miller and David
                                    Fincher.
                                </div>
                            </div></a>
                        <div data-toggled="true" className="listToggle">
                            <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
        }

export default WatchList;