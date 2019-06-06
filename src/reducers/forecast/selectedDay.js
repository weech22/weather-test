import { handleAction } from 'redux-actions';

export default handleAction('SELECT_DAY', (state, action) => action.payload, 0);
