import TitleList from './TitleList';

const Main = ({ showsToDisplay, handleClick, handleToggle, inWatchList }) => {
	return (<>
		{showsToDisplay.map((listCategory, index) => {
			return (
				<TitleList
					label={listCategory.label}
					shows={listCategory.showList.results ? listCategory.showList.results : listCategory.showList}
					inWatchList={inWatchList}
					handleClick={handleClick}
					handleToggle={handleToggle}
					key={index}
				/>)
		})}
	</>);
}

export default Main;