import TitleList from './TitleList';

const Main = ({ showsToDisplay, handleClick, handleToggle, inWatchList }) => {
	return (<>
		{showsToDisplay.map((providerList, index) => {
			return (
				<TitleList
					label={providerList.label}
					shows={providerList.showList.results}
					inWatchList={inWatchList}
					handleClick={handleClick}
					handleToggle={handleToggle}
					key={index}
				/>)
		})}
	</>);
}

export default Main;