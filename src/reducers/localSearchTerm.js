export default (searchTerm = '', action) => {
  if (action.type === 'LOCAL_SEARCH') {
    return action.payload;
  }
  return searchTerm;
};
