import Show from "./Show";

const TitleList = ({provider, shows}) => {
    return ( 		<div className="titleList">
    <div className="title">
        <h1>{provider}</h1>
        <div className="titles-wrapper">

            {shows.map((show) => {
                return (<Show
                show={show}
                key={show.id}
                />)
            })}
        </div>
    </div>
</div> );
}
 
export default TitleList;