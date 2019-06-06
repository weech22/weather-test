import { combineReducers } from 'redux';
import searchResult from './searchResult';
import searchTerm from './searchTerm';

export default combineReducers({
  searchResult,
  searchTerm
});
