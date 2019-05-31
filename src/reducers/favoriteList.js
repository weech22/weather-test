export default (currentList = [], action) => {
  switch (action.type) {
    case 'UPDATE_FAVORITES':
      return action.payload;

    default:
      return currentList;
  }
};
