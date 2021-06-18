import TitleList from "./TitleList";

const Main = ({ showsToDisplay, inWatchList, handleClick, handleToggle }) => {
  return (
    <>
      {showsToDisplay.map((provider, index) => {
        return (
          <TitleList
            label={provider.label}
            shows={provider.showList.results ? provider.showList.results : provider.showList}
            inWatchList={inWatchList}
            handleClick={handleClick}
            handleToggle={handleToggle}
            key={index}
          />
        );
      })}
    </>
  );
};

export default Main;
