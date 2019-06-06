import { handleAction } from 'redux-actions';

export default handleAction(
  'UPDATE_FAVORITES',
  (state, action) => action.payload.sort((a, b) => a.title.localeCompare(b.title)),
  [],
);
