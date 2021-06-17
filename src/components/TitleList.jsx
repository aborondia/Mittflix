import Show from "./Show";

const TitleList = ({ label, shows, handleClick }) => {
	return (
		<div className="titleList">
			<div className="title">
				<h1>{label}</h1>
				<div className="titles-wrapper">
					{shows.map((show) => {
						return (<Show
							show={show}
							handleClick={handleClick}
							key={show.id}
						/>)
					})}
				</div>
			</div>
		</div>
	);
}

export default TitleList;