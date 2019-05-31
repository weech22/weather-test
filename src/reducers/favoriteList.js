export default (currentList = [], action) => (action.type === 'UPDATE_FAVORITES'
  ? action.favoriteList.sort((a, b) => a.title.localeCompare(b.title))
  : currentList);
