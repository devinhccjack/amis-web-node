console.log('process.env.NODE_ENV', process.env.NODE_ENV);

let env = process.env.NODE_ENV || 'development';
const URLS = {
  development: 'http://127.0.0.1:1753',
  production: 'http://10.40.70.26:1753',
};
export const UrlPath = URLS[env];
