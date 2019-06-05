import { combineReducers } from 'redux';
import favoriteList from './favoriteList';
import forecast from './forecast';
import apiSearch from './apiSearch';
import localSearch from './localSearch';
import hoveredCity from './hoveredCity';

export default combineReducers({
  favoriteList,
  apiSearch,
  localSearch,
  forecast,
  hoveredCity
});
