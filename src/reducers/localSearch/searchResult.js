import { handleAction } from 'redux-actions';

export default handleAction(
  'LOCAL_SEARCH_RESULT',
  (state, action) => action.payload.favoriteList.filter(
    x => x.title.toLowerCase().search(action.payload.searchTerm.toLowerCase()) !== -1,
  ),
  [],
);
