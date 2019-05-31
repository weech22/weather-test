import { combineReducers } from 'redux';
import favoriteList from './favoriteList';
import selectedDay from './selectedDay';
import forecast from './forecast';
import localSearchTerm from './localSearchTerm';
import apiSearchTerm from './apiSearchTerm';
import searchResult from './searchResult';
import localSearchResult from './localSearchResult';
import hoveredCity from './hoveredCity';

export default combineReducers({
  favoriteList,
  searchResult,
  localSearchResult,
  apiSearchTerm,
  localSearchTerm,
  selectedDay,
  forecast,
  hoveredCity,
});
