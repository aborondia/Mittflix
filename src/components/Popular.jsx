import TitleList from './TitleList';
import { getPopularShowsData } from '../services/apiHandler';
import { useState, useEffect } from 'react';

const Popular = ({ inWatchList, handleClick, handleToggle }) => {
  const providers = [
    { label: 'Netflix', id: 8 },
    { label: 'Crave', id: 230 },
    { label: 'Disney', id: 337 },
    { label: 'Apple Plus', id: 350 },
  ];
  const [popularShows, setPopularShows] = useState([]);

  const getPopularShows = async () => {
    const promises = [];
    const showLists = [];

    for (let provider of providers) {
      await getPopularShowsData(provider.id)
        .then((promise) => {
          showLists.push({ label: provider.label, showList: promise });
          promises.push(promise);
        })
        .catch((error) => console.log(error));
    }

    Promise.all(promises).then(() => setPopularShows(showLists));
  };

  useEffect(() => {
    getPopularShows();
  }, []);

  return (
    <>
      {popularShows.map((provider, index) => {
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

export default Popular;
