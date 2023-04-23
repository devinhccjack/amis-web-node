import axios from 'axios';

import { chartDataTypes, onlyIdObjType, onlyEmailObjType } from '@/config/common.request';

import { UrlPath } from './config';
console.log('UrlPath---', UrlPath);
let baseUrl = UrlPath;

export const getChartList = async (obj: onlyEmailObjType) => {
  const res = await axios.post(baseUrl + '/node/getChartList', obj);
  return res;
};

export const getChartDetail = async (obj: onlyIdObjType) => {
  const res = await axios.post(baseUrl + '/node/getChartDetailById', obj);
  return res;
};

export const addChart = async (obj: chartDataTypes) => {
  const res = await axios.post(baseUrl + '/node/addChart', obj);
  return res;
};

export const updateChart = async (obj: chartDataTypes) => {
  const res = await axios.post(baseUrl + '/node/updateChart', obj);
  return res;
};

export const deleteChart = async (obj: onlyIdObjType) => {
  const res = await axios.post(baseUrl + '/node/deleteChart', obj);
  return res;
};
