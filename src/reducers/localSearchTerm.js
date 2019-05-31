export default (searchTerm = '', action) => (action.type === 'LOCAL_SEARCH' ? action.searchTerm : searchTerm);
