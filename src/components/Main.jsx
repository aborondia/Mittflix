import TitleList from './TitleList';

const Main = ({ showsByProvider }) => {

	return (<>
		{showsByProvider.map((providerList, index) => {
			return (
				<TitleList
					provider={providerList.providerName}
					shows={providerList.showList}
					key={index}
				/>)
		})}
	</>);
}

export default Main;