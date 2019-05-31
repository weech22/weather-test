export default (searchTerm = '', action) => {
  if (action.type === 'API_SEARCH') {
    return action.payload;
  }
  return searchTerm;
};
