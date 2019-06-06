export const localSearch = (searchTerm) => ({
  type: 'LOCAL_SEARCH',
  searchTerm
});

export const localSearchResult = (favoriteList, searchTerm) => ({
  type: 'LOCAL_SEARCH_RESULT',
  favoriteList,
  searchTerm
});
