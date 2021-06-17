import Show from "./Show";

const WatchList = ({ watchList, handleClick, handleToggle }) => {
    return (
        <div className="titleList">
            <div className="title">
                <h1>My Watch List</h1>
                <div className="titles-wrapper">
                    {watchList.map(show => {
                        return (
                            <Show
                                show={show}
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