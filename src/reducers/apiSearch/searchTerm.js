import { handleAction } from 'redux-actions';

export default handleAction('API_SEARCH', (state, action) => action.payload, []);
