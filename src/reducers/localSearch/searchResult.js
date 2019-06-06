export default (currentList = [], action) => (action.type === 'LOCAL_SEARCH_RESULT'
  ? action.favoriteList.filter(
    x => x.title.toLowerCase().search(action.searchTerm.toLowerCase()) !== -1,
  )
  : currentList);
