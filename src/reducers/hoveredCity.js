export default (hoveredCity = null, action) => (action.type === 'HOVER_CITY' ? action.city : hoveredCity);
