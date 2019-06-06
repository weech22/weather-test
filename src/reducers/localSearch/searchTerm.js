import { handleAction } from 'redux-actions';

export default handleAction('LOCAL_SEARCH', (state, action) => action.payload, '');
