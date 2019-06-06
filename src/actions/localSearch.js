import { createAction } from 'redux-actions';

export const localSearch = createAction('LOCAL_SEARCH');
export const localSearchResult = createAction(
  'LOCAL_SEARCH_RESULT',
  (favoriteList, searchTerm) => ({ favoriteList, searchTerm }),
);
