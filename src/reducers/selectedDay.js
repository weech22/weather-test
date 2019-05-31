export default (selectedDay = 0, action) => (action.type === 'SELECT_DAY' ? action.day : selectedDay);
