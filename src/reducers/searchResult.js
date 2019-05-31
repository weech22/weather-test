export default (searchResult = [], action) => {
  if (action.type === 'FETCH_CITY_LIST') {
    if (action.payload.data.length) {
      return action.payload.data;
    }
    return null;
  }
  if (action.type === 'EMPTY_CITY_LIST') {
    return [];
  }
  return searchResult;
};
