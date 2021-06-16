import TitleList from './TitleList';

const Main = ({ showsToDisplay }) => {
	return (<>
		{showsToDisplay.map((providerList, index) => {
			return (
				<TitleList
					label={providerList.label}
					shows={providerList.showList.results}
					key={index}
				/>)
		})}
	</>);
}

export default Main;