import axios from 'axios';
import { UrlObj } from './config'
let baseUrl = UrlObj.baseProUrl


export const login = async (obj) => {
  console.log('obj---',obj)
  const res = await axios.post(baseUrl+'/node/login', obj);
  return res;
};
