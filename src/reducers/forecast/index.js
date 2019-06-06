import { combineReducers } from 'redux';
import forecastData from './forecastData';
import selectedDay from './selectedDay';

export default combineReducers({
  forecastData,
  selectedDay
});
