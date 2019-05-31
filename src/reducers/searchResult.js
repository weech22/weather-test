export default (searchResult = [], action) => {
  switch (action.type) {
    case 'FETCH_CITY_LIST':
      if (action.response.data.length) {
        return action.response.data.sort((a, b) => a.title.localeCompare(b.title));
      }
      return null;
    case 'EMPTY_CITY_LIST':
      return [];
    default:
      return searchResult;
  }
};
