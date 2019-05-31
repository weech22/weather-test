export default (hoveredCity = null, action) => {
  switch (action.type) {
    case 'HOVER_CITY':
      return action.city;

    default:
      return hoveredCity;
  }
};
