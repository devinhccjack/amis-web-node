import axios from 'axios';
import { UrlPath } from './config';
console.log('UrlPath---', UrlPath);
let baseUrl = UrlPath;

export const login = async (obj) => {
  console.log('obj---', obj);
  const res = await axios.post(baseUrl + '/node/login', obj);
  return res;
};
