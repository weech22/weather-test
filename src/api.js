import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location',
  timeout: 10000,
});

export default api;
