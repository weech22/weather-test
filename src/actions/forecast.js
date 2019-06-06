import { createAction } from 'redux-actions';
import api from '../utils/api';

export const selectDay = createAction('SELECT_DAY');

export const fetchForecast = cityId => async (dispatch) => {
  const response = await api.get(`${cityId}`);
  dispatch({ type: 'FETCH_FORECAST', response });
};
