import { handleAction } from 'redux-actions';

export default handleAction('HOVER_CITY', (state, action) => action.payload, null);
