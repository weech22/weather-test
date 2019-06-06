import api from '../utils/api';

export const selectDay = (day) => ({
  type: 'SELECT_DAY',
  day
});

export const fetchForecast = (cityId) => async (dispatch) => {
  const response = await api.get(`${cityId}`);
  dispatch({ type: 'FETCH_FORECAST', response });
};
