export default (selectedDay = 0, action) => {
  if (action.type === 'SELECT_DAY') {
    return action.payload;
  }
  return selectedDay;
};
