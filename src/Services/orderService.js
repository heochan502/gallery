import axios from './httpRequester';

const path = '/order';

export const getOrders = () => {
  return axios.get('/order').catch((e) => e.response);
};
export const addOrder = (args) => {
  return axios.post(path, args).catch((e) => e.response);
};
