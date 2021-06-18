import TitleList from "./TitleList";

const WatchList = ({ showsToDisplay, inWatchList, handleClick, handleToggle }) => {
  return (
    <>
      <TitleList
        label='Watch List'
        shows={showsToDisplay}
        inWatchList={inWatchList}
        handleClick={handleClick}
        handleToggle={handleToggle}
      />
    </>
  );
};

export default WatchList;
