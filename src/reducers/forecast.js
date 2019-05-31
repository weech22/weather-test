const initialState = {
  weatherByDays: [],
  region: '',
  cityName: '',
  woeid: '',
};

export default (forecast = initialState, action) => (action.type === 'FETCH_FORECAST'
  ? {
    weatherByDays: action.response.data.consolidated_weather,
    region: action.response.data.parent.title,
    cityName: action.response.data.title,
    woeid: action.response.data.woeid,
  }
  : forecast);
