import Show from "./Show";

const WatchList = ({ watchList, handleClick, handleToggle, inWatchList }) => {
    return (
        <div className="titleList">
            <div className="title">
                <h1>My Watch List</h1>
                <div className="titles-wrapper">
                    {watchList.map(show => {
                        return (
                            <Show
                                show={show}
                                inWatchList={inWatchList}
                                handleClick={handleClick}
                                handleToggle={handleToggle}
                                key={show.id}
                            />)
                    })}
                </div>
            </div>
        </div>);
}

export default WatchList;