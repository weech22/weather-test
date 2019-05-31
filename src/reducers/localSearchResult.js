export default (currentList = [], action) => {
  switch (action.type) {
    case 'LOCAL_SEARCH_RESULT':
      return action.payload.favoriteList.filter(
        x => x.title.toLowerCase().search(action.payload.searchTerm.toLowerCase()) !== -1,
      );

    default:
      return currentList;
  }
};
