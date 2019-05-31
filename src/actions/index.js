import api from '../api';

export const updateFavorites = favoriteList => ({
  type: 'UPDATE_FAVORITES',
  payload: favoriteList,
});

export const selectDay = day => ({
  type: 'SELECT_DAY',
  payload: day,
});

export const fetchForecast = cityId => async (dispatch) => {
  const response = await api.get(`${cityId}`);
  dispatch({ type: 'FETCH_FORECAST', payload: response });
};

export const fetchCityList = searchTerm => async (dispatch) => {
  const response = await api.get(`/search/?query=${searchTerm}`);
  dispatch({ type: 'FETCH_CITY_LIST', payload: response });
};

export const apiSearch = searchTerm => ({
  type: 'API_SEARCH',
  payload: searchTerm,
});

export const localSearch = searchTerm => ({
  type: 'LOCAL_SEARCH',
  payload: searchTerm,
});

export const localSearchResult = (favoriteList, searchTerm) => ({
  type: 'LOCAL_SEARCH_RESULT',
  payload: { favoriteList, searchTerm },
});

export const emptyCityList = () => ({
  type: 'EMPTY_CITY_LIST',
});

export const hoverCity = city => ({
  type: 'HOVER_CITY',
  city,
});
