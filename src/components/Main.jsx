import TitleList from './TitleList';

const Main = ({ showsToDisplay, handleClick }) => {
	return (<>
		{showsToDisplay.map((providerList, index) => {
			return (
				<TitleList
					label={providerList.label}
					shows={providerList.showList.results}
					handleClick={handleClick}
					key={index}
				/>)
		})}
	</>);
}

export default Main;