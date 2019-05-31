const initialState = {
  weatherByDays: [],
  region: '',
  cityName: '',
  woeid: '',
};

export default (state = initialState, action) => {
  if (action.type === 'FETCH_FORECAST') {
    return {
      weatherByDays: action.payload.data.consolidated_weather,
      region: action.payload.data.parent.title,
      cityName: action.payload.data.title,
      woeid: action.payload.data.woeid,
    };
  }
  return state;
};
