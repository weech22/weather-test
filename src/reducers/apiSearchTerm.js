export default (searchTerm = [], action) => (action.type === 'API_SEARCH' ? action.searchTerm : searchTerm);
