const apiKey = "45db535623e9d1a035b7e71efd956de0";

const searchURL = {
  get: (query) => {
    return `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=en-CA&page=1&include_adult=false&query=${query}`;
  },
};

const detailsURL = {
    get: (id) => {
      return `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=en-US`;
    },
  };

  const popularShowsURL = {
    get: (id) => {
      return `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-CA&sort_by=popularity.desc&page=1&with_watch_providers=${id}&watch_region=CA`;
    },
  };

export const getData = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Fetch unsuccessful");
  }

  const data = await response.json();

  return data;
};

export const getSearchData = (query) => {
  const URL = searchURL.get(query);
  const results = getData(URL);

  return results;
};

export const getShowDetailsData = (id) => {
  const URL = detailsURL.get(id);
  const results = getData(URL);

  return results;
};

export const getPopularShowsData = (providerId) => {
  const URL = popularShowsURL.get(providerId);
  const results = getData(URL);

  return results;
};
