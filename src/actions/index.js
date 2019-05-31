import api from '../api';

export const updateFavorites = favoriteList => ({
  type: 'UPDATE_FAVORITES',
  favoriteList,
});

export const selectDay = day => ({
  type: 'SELECT_DAY',
  day,
});

export const fetchForecast = cityId => async (dispatch) => {
  const response = await api.get(`${cityId}`);
  dispatch({ type: 'FETCH_FORECAST', response });
};

export const fetchCityList = searchTerm => async (dispatch) => {
  const response = await api.get(`/search/?query=${searchTerm}`);
  dispatch({ type: 'FETCH_CITY_LIST', response });
};

export const apiSearch = searchTerm => ({
  type: 'API_SEARCH',
  searchTerm,
});

export const localSearch = searchTerm => ({
  type: 'LOCAL_SEARCH',
  searchTerm,
});

export const localSearchResult = (favoriteList, searchTerm) => ({
  type: 'LOCAL_SEARCH_RESULT',
  favoriteList,
  searchTerm,
});

export const emptyCityList = () => ({
  type: 'EMPTY_CITY_LIST',
});

export const hoverCity = city => ({
  type: 'HOVER_CITY',
  city,
});
