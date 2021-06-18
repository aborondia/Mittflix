import TitleList from "./TitleList";

const Main = ({ showsToDisplay, inWatchList, handleClick, handleToggle }) => {
  return (
    <>
      {showsToDisplay.map((listCategory, index) => {
        return (
          <TitleList
            label={listCategory.label}
            shows={listCategory.showList.results ? listCategory.showList.results : listCategory.showList}
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
