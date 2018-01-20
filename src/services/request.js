import axios from 'axios';

const appId = '68fbc6ebe3634d78bd9c8502ac9d39fc';

export default {
  latest: () => axios.get(`https://openexchangerates.org/api/latest.json?app_id=${appId}`),
  currecies: () => axios.get('https://openexchangerates.org/api/currencies.json'), // deprecated
};
