export const emptyCityList = () => ({
  type: 'EMPTY_CITY_LIST'
});

export const hoverCity = (city) => ({
  type: 'HOVER_CITY',
  city
});
