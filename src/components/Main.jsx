import TitleList from './TitleList';

const Main = ({ showsToDisplay, handleClick, handleToggle }) => {
	return (<>
		{showsToDisplay.map((providerList, index) => {
			return (
				<TitleList
					label={providerList.label}
					shows={providerList.showList.results}
					handleClick={handleClick}
					handleToggle={handleToggle}
					key={index}
				/>)
		})}
	</>);
}

export default Main;