import api from '../utils/api';

export const fetchCityList = (searchTerm) => async (dispatch) => {
  const response = await api.get(`/search/?query=${searchTerm}`);
  dispatch({ type: 'FETCH_CITY_LIST', response });
};

export const apiSearch = (searchTerm) => ({
  type: 'API_SEARCH',
  searchTerm
});
